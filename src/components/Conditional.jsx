import React, { useEffect, useState } from "react";

const Conditional = () => {
  const [fungsi, setFungsi] = useState(() => console.log("ini state"));
  const data = [
    {
      id: 1,
      title: "Judul Satu",
      desc: true,
    },
    {
      id: 2,
      title: "Judul Dua",
      desc: true,
    },
    {
      id: 3,
      title: "Judul 3",
      desc: false,
    },
  ];

  const Test = ({ children, test }) => (
    <>
      {children}
      <p>{test}</p>
    </>
  );

  // const [number, setNumber] = useState(1);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNumber((prev) => prev + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [number]);

  return (
    <div>
      {/* {data.map((ele, index) => (
        <div className="card">
          <h1 className="text-lg font-bold">{ele.title}</h1>
          <p>{ele.desc ? <h1>ini gak null!</h1> : "ini null!"}</p>
        </div>
      ))}
      <Test test="ini props">
        <p>Haloo</p>
      </Test>
      <button onClick={() => fungsi()}>Test</button> */}
      <p>{number}</p>
    </div>
  );
};

export default Conditional;
