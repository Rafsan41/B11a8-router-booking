import React from "react";
import { useNavigate } from "react-router";
import NavBar from "../../Componants/NavBar/NavBar";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto">
      <div className="mx-20">
        <NavBar></NavBar>
      </div>
      <div className=" mt-10 flex justify-center items-center">
        <div>
          <img
            className=" w-[450px] h-[400]"
            src="https://i.ibb.co.com/41XXTSv/nonetwork.gif"
            alt=""
          />
          <div className=" mt-10 flex justify-center items-center">
            <button
              onClick={() => navigate(-1)}
              className=" bg-amber-100 py-3 px-5 rounded-4xl text-black font-extrabold text-2xl"
              type="button"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
