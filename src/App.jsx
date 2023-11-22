import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import axios from "axios";
import Test from "./components/Detail";
import Try from "./components/Playlist";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useFetcher,
} from "react-router-dom";
import LocalStorage from "./components/LocalStorage";
import Params from "./components/Params";
import Kategori from "./components/Kategori";
import Prev from "./components/Prev";
import Conditional from "./components/Conditional";
import Auth from "./components/Auth";

function App() {
  const linkRef2 = useRef(null);
  const linkRef = useRef(null);

  const toBottom = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const toTop = (ref) => [
    window.scrollTo({
      // bottom: ref.offsetBottom,
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    }),
  ];
  // const [change, setChange] = useState();
  // const [item, setItem] = useState("PL70nkI3SGJExa_v1NLJAC9vb8uImu1IaQ");
  // const apiKey = "AIzaSyCytFkV9oeLZtJakRvkwhKDDEiDZ8sk1HU";
  // const channelID = "UCz0YDzm9M74BF-72UeQlRNA";
  // const [episode, setEpisode] = useState([]);

  // const URLplaylist = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelID}&maxResults=25&key=${apiKey}`;
  // const URLitemPlaylist = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${item}&key=${apiKey}`;
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(URLplaylist);
  //       setData(response.data.items);
  //       data.map((ele, index) => console.log(ele, "Episode :", index + 1));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/prev" exact element={<Prev />} />
          <Route path="/conditional" exact element={<Conditional />} />
          <Route path="/" exact element={<Auth />} />
        </Routes>
      </Router>
      {/* {data.map((ele, index) => (
        <div className="card pb-7">
          <img src={ele.snippet.thumbnails.maxres.url} alt="" srcset="" />
          <h1 className="text-5xl">{ele.snippet.title}</h1>
          <h6>Episode {index + 1}</h6>
          <a href={`https://www.youtube.com/playlist?list=${ele.id}`}>Click</a>
        </div>
      ))}{" "} */}
      {/* <Router>
        <Routes>
          <Route path="/detail/:playlistId" exact element={<Test />} />
          <Route path="/playlist" exact element={<Try />} />
          <Route path="/local" exact element={<LocalStorage />} />
          <Route path="/kategori/:id" exact element={<Kategori />} />
          <Route path="/pilihan" exact element={<Params />} />
          <Route path="/prev" exact element={<Prev />} />
        </Routes>
      </Router> */}
      {/* <h1 ref={linkRef2} onClick={() => toBottom(linkRef.current)}>
        To Bottop
      </h1>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p className="text-3xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
        doloribus aperiam odio alias accusamus fugit rerum hic nihil architecto,
        cupiditate, aliquid exercitationem impedit natus nesciunt suscipit
        autem, blanditiis beatae assumenda!
      </p>
      <p
        onClick={() => toTop(linkRef2.current)}
        className="text-2xl font-bold"
        ref={linkRef}
      >
        Hei i am bottom
      </p> */}
    </>
  );
}

export default App;
