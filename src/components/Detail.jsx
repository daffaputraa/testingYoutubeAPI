import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Test = () => {
  const { playlistId } = useParams();
  const videoId = "XWePdlCGTno";
  const [show, setShow] = useState();
  const apiKey = "AIzaSyCytFkV9oeLZtJakRvkwhKDDEiDZ8sk1HU";
  const userID = "UCz0YDzm9M74BF-72UeQlRNA";
  const [item, setItem] = useState("PL70nkI3SGJEyx0dTLzOvfb26rP8emQKQa");
  const URLplaylist = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${userID}&maxResults=25&key=${apiKey}`;
  const URLitemPlaylist = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playlistId}&key=${apiKey}`;
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(URLitemPlaylist);
      setResult(data.items);
      console.log(result.map((ele) => ele.contentDetails.videoId));
    };

    fetchData();
  }, [show]);

  return (
    <section className="playlist">
      <div className="main">
        <button onClick={() => setShow("show")}>Show</button>
        {result.map((ele, index) => (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${ele.contentDetails.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ))}
      </div>
    </section>
  );
};

export default Test;
