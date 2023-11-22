import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LocalStorage = () => {
  const [show, setShow] = useState();
  const [urutan, setUrutan] = useState(0);
  const [active, setActive] = useState();
  const { id } = useParams();
  const apiKey = "AIzaSyCytFkV9oeLZtJakRvkwhKDDEiDZ8sk1HU";
  const userID = "UCA9yYUXFKSiL5KglS2cEVdQ";
  const URLplaylist = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${userID}&maxResults=25&key=${apiKey}`;
  const URLitemPlaylist = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${id}&key=${apiKey}`;
  const [resplaylist, setResplaylist] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(URLitemPlaylist);
      setResult(data.items);
      setActive(data.items[urutan].etag);
    };

    const fetchPlaylist = async () => {
      const { data } = await axios.get(URLplaylist);
      setResplaylist(data.items);
      setTitle(resplaylist.filter((ele) => ele.id == id));
      console.log(title);
    };

    fetchData();
    fetchPlaylist();
  }, [urutan]);

  const [result, setResult] = useState([]);
  //   const [number, setNumber] = useState(1);
  const [number, setNumber] = useState(() => {
    const data = window.localStorage.getItem("value");
    return data !== null ? parseInt(data) : 1;
  });

  const dataTitle = [
    {
      id: 1,
      item: "Tabs 1",
    },
    {
      id: 2,
      item: "Tabs 2",
    },
    {
      id: 3,
      item: "Tabs 3",
    },
  ];

  const dataTabs = [
    {
      id: 1,
      text: "Item 1",
    },
    {
      id: 2,
      text: "Item 2",
    },
    {
      id: 3,
      text: "Item 3",
    },
  ];

  //   useEffect(() => {
  //     const data = window.localStorage.getItem("value");
  //     if (data !== null) {
  //       setNumber(parseInt(data));
  //     }
  //     console.log(data);
  //   }, []);

  useEffect(() => {
    window.localStorage.setItem("value", number.toString());
  }, [number]);

  useEffect(() => {
    setResult(dataTabs.filter((ele) => ele.id === number));
  }, [number]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="main">
        <div className="button bg-neutral-100 p-6 flex gap-2 ">
          {dataTitle.map((ele) => (
            <button
              key={ele.id}
              onClick={() => setNumber(ele.id)}
              className={`${
                ele.id === number
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-300"
              }p-3 bg-neutral-300 hover:bg-neutral-400 focus:bg-neutral-600`}
            >
              {ele.item}
            </button>
          ))}
        </div>
        <div className="content">
          {result.map((ele, index) => (
            <p key={ele.id}>{ele.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalStorage;
