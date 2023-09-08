import { useEffect, useState } from "react";
import Button from "./components/Button";
import axios from "axios";
import Test from "./components/Detail";
import Try from "./components/Playlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [change, setChange] = useState();
  const [item, setItem] = useState("PL70nkI3SGJExa_v1NLJAC9vb8uImu1IaQ");
  const apiKey = "AIzaSyCytFkV9oeLZtJakRvkwhKDDEiDZ8sk1HU";
  const channelID = "UCz0YDzm9M74BF-72UeQlRNA";
  const [episode, setEpisode] = useState([]);

  const URLplaylist = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelID}&maxResults=25&key=${apiKey}`;
  const URLitemPlaylist = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${item}&key=${apiKey}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(URLplaylist);
        setData(response.data.items);
        data.map((ele, index) => console.log(ele, "Episode :", index + 1));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      {/* {data.map((ele, index) => (
        <div className="card pb-7">
          <img src={ele.snippet.thumbnails.maxres.url} alt="" srcset="" />
          <h1 className="text-5xl">{ele.snippet.title}</h1>
          <h6>Episode {index + 1}</h6>
          <a href={`https://www.youtube.com/playlist?list=${ele.id}`}>Click</a>
        </div>
      ))} */}
      <Router>
        <Routes>
          <Route path="/detail/:playlistId" exact element={<Test />} />
          <Route path="/playlist" exact element={<Try />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
