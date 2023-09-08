import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ className }) => {
  return (
    <button
      className={twMerge(`bg-blue-500 py-3 px-5 rounded text-white`, className)}
    >
      This Is Button
    </button>
  );
};

export default Button;
