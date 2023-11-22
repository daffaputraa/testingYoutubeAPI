import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);

      if (result) {
        localStorage.setItem("email", result);
        navigate("/prev");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <button
          onClick={login}
          className="px-2 py-3 border-2 border-gray-300 rounded font-semibold text-gray-500 hover:bg-gray-200 active:bg-gray-400"
        >
          Login Button
        </button>
      </div>
    </>
  );
};

export default Auth;
