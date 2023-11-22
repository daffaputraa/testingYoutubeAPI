import React, { useEffect, useState } from "react";
import { kategori } from "../constant";
import { useParams } from "react-router-dom";

const Kategori = () => {
  const { id } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(kategori.filter((ele, index) => ele.id === id));
  }, []);
  return (
    <div>
      <div className="main">
        {result.map((ele, index) => (
          <h1>{ele.item}</h1>
        ))}
      </div>
    </div>
  );
};

export default Kategori;
