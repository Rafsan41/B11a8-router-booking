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
  // https://i.ibb.co.com/232qJvMS/20.jpg
  //
  // https://i.ibb.co.com/wrRghBVv/02.jpg
  // https://i.ibb.co.com/8gP95p09/03.jpg
  // https://i.ibb.co.com/LzybXTSY/04.jpg
  // https://i.ibb.co.com/RTZMBDHS/05.jpg
  // https://i.ibb.co.com/LDYN5r5g/06.jpg
  // https://i.ibb.co.com/SwCyjCMH/07.jpg
  // https://i.ibb.co.com/x8B7dKtn/08.jpg
  // https://i.ibb.co.com/6JvykqWG/09.jpg
  // https://i.ibb.co.com/WWqfFwxG/10.jpg
  // https://i.ibb.co.com/vCRVxGHf/11.jpg
  // https://i.ibb.co.com/r2qWR4xG/12.jpg
  // https://i.ibb.co.com/xqNRP2C6/13.jpg
  // https://i.ibb.co.com/1tCcBrXk/14.jpg
  // https://i.ibb.co.com/Fq09w3dn/15.jpg
  // https://i.ibb.co.com/PzMW7VBZ/16.jpg
  // https://i.ibb.co.com/DgK3qKCn/17.jpg
  // https://i.ibb.co.com/39KWp3qM/18.jpg
  // https://i.ibb.co.com/7dLQCmjG/19.jpg

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
