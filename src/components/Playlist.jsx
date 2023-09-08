import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Try = () => {
  const { playlistId } = useParams();
  const [show, setShow] = useState([]);
  const apiKey = "AIzaSyCytFkV9oeLZtJakRvkwhKDDEiDZ8sk1HU";
  const userID = "UCz0YDzm9M74BF-72UeQlRNA";
  const URLplaylist = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${userID}&maxResults=25&key=${apiKey}`;
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(URLplaylist);
      setResult(data.items);

      console.log(result);
    };

    fetchData();
  }, [show]);
  return (
    <div>
      <button onClick={() => setShow("show")}>Show</button>
      {result.map((ele, index) => (
        <div className="items">
          <img src={ele.snippet.thumbnails.maxres.url} alt="" srcset="" />
          <h1>{ele.snippet.title}</h1>
          <Link to={`/detail/${ele.id}`}>Test</Link>
        </div>
      ))}
    </div>
  );
};

export default Try;
