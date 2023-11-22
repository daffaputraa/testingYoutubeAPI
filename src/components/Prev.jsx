import React, { useState } from "react";

const Prev = () => {
  const [status, setStatus] = useState(false);

  const show = () => {
    setTimeout(() => {
      setStatus((prev) => setStatus(!prev));
    }, 2000);
    setStatus(!status);
  };
  return (
    <div>
      <div className="main">
        <button onClick={show}>Show</button>
        <div
          className={`banner bg-blue-400 w-[300px] h-[300px] ${
            status ? "flex" : "hidden"
          }`}
        >
          This Is Banner
        </div>
      </div>
    </div>
  );
};

export default Prev;
