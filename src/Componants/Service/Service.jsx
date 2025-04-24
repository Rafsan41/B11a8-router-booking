import React from "react";
import icon1 from "./../../assets/success-doctor.png";
import icon2 from "./../../assets/success-review.png";
import icon3 from "./../../assets/success-patients.png";
import icon4 from "./../../assets/success-staffs.png";
import CountUp from "react-countup";
const Service = () => {
  return (
    <div>
      <div>
        <div>
          <p className="text-center text-4xl font-semibold">
            We Provide Best Law Services
          </p>
          <p className="text-center text-lg font-light">
            Our platform connects you with verified, experienced Lawyers across
            various specialities — all at your convenience.{" "}
          </p>
        </div>
        <div className="grid grid-cols-4 text-center p-5 gap-8 ">
          <div className="bg-blue-100 rounded-2xl p-5">
            <div>
              <img className="w-14 h-14" src={icon1} alt="" />
            </div>
            <p className="text-4xl font-bold text-black text-left py-2">
              <CountUp delay={2} end={119} duration={4} enableScrollSpy />+
            </p>
            <p className="text-left text-xl text-gray-400">tatal Service</p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-5">
            <div>
              <img className="w-14 h-14" src={icon2} alt="" />
            </div>
            <p className="text-4xl font-bold text-black text-left py-2">
              <CountUp delay={2} end={467} duration={3} enableScrollSpy />+
            </p>
            <p className="text-left text-xl text-gray-400">tatal Service</p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-5">
            <div>
              <img className="w-14 h-14" src={icon3} alt="" />
            </div>
            <p className="text-4xl font-bold text-black text-left py-2">
              <CountUp delay={2} end={1900} duration={4} enableScrollSpy />+
            </p>
            <p className="text-left text-xl text-gray-400">tatal Service</p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-5">
            <div>
              <img className="w-14 h-14" src={icon4} alt="" />
            </div>
            <p className="text-4xl font-bold text-black text-left py-2">
              <CountUp delay={2} end={300} duration={5} enableScrollSpy />+
            </p>
            <p className="text-left text-xl text-gray-400">tatal Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
