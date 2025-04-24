import React from "react";
import BannnerImg from "./../../assets/banner-img-1.png";
const Banner = () => {
  return (
    <div className=" flex justify-center items-center mt-16">
      <img className="w-[100%] h-[100%] rounded-2xl" src={BannnerImg} alt="" />
      <div className="absolute text-5xl font-extrabold w-[60%] text-center text-white ">
        <p>
          It avoids subjective claims or <br /> exaggeration that might raise
          red <br />
          flags legally
        </p>
        <p className="text-lg font-light pt-5">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
    </div>
  );
};

export default Banner;
