import React, { Suspense, useEffect, useState } from "react";
import Lawyer from "../Lawyer/Lawyer";

const Lawyers = ({ LawyersData }) => {
  const data = LawyersData;

  const [displayLawyer, setDisplayLawyer] = useState([]);
  const [showALl, setShowAll] = useState(false);

  useEffect(() => {
    if (showALl) {
      setDisplayLawyer(data);
    } else {
      setDisplayLawyer(data.slice(0, 6));
    }
  }, [data, showALl]);

  console.log(data);
  return (
    <div>
      <div>
        <div>
          <div className="flex-col justify-center items-center my-10">
            <p className="text-center text-5xl ">Our Best Lawyers</p>
            <div className=" w-10/12 mx-auto mt-3">
              <p className="text-center text-lg font-semibold ">
                Our platform connects you with verified, experienced Lawyers
                across various specialties — all at your convenience. Whether
                it's a routine checkup or urgent consultation, book appointments
                in minutes and receive quality care you can trust.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <Suspense fallback={<span>Loadig.....</span>}>
              {displayLawyer.map((lawyer) => (
                <Lawyer key={lawyer.id} lawyer={lawyer}></Lawyer>
              ))}
            </Suspense>
          </div>
          <div className=" text-center text-2xl font-bold mb-10">
            <button
              onClick={() => setShowAll(!showALl)}
              className="bg-green-400 rounded-full px-5 py-3"
            >
              {showALl ? "Show Less" : " Show ALL"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
