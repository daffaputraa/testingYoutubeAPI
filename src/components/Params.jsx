import React from "react";
import { Link, useParams } from "react-router-dom";

const Params = () => {
  const pilihan = [
    {
      id: 1,
      title: "Pil 1",
    },
    {
      id: 2,
      title: "Pil 2",
    },
    {
      id: 3,
      title: "Pil 3",
    },
  ];

  return (
    <div>
      {pilihan.map((ele, index) => (
        <Link key={ele.id} to={`/kategori/${ele.id}`}>
          {ele.title}
        </Link>
      ))}
    </div>
  );
};

export default Params;
