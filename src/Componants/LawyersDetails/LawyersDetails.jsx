import React from "react";
import { FaRegRegistered } from "react-icons/fa6";
import { useLoaderData, useNavigate, useParams } from "react-router";
import {
  addToStoredDB,
  getBookingLawyerStoredList,
} from "../../Utility/AddTODb";
import { BiSolidMessageAltError } from "react-icons/bi";
import { Bounce, toast } from "react-toastify";
const LawyersDetails = () => {
  const { lawyerDetailsId } = useParams();
  const lawyersDetails = useLoaderData();
  const navigate = useNavigate();

  const singleLawyer = lawyersDetails.find(
    (lawyer) => lawyer.id === lawyerDetailsId
  );
  const { name, speciality, experience, licenseNumber, availability, fees } =
    singleLawyer;

  const handelAppointment = (lawyerDetailsId) => {
    const storedList = getBookingLawyerStoredList();
    if (storedList.includes(lawyerDetailsId)) {
      toast.warn("Your Appointment Already Placed!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    addToStoredDB(lawyerDetailsId);
    navigate(`/mybookings`);
  };

  console.log(lawyersDetails);
  return (
    <div>
      LawyersDetails
      <div className="text-5xl my-16 py-30 bg-gray-200 text-black">
        <p className="text-center py-5 font-bold ">Lawyer’s Profile Details</p>
        <p className="text-lg text-center w-7/12 mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          sequi esse aliquam tenetur atque quae ad architecto numquam in minima?
          Deleniti et debitis minima ut dolores corrupti accusamus labore unde?
        </p>
      </div>
      <div>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <div>
              <div className="badge badge-outline badge-success">Available</div>
              <div className="ml-5 badge badge-outline badge-info">
                {experience}+ Experience
              </div>
            </div>
            <div>
              <p className="text-4xl">{name}</p>
              <div className="flex justify-start items-center mt-3">
                <div>
                  {" "}
                  <p className=" text-2xl">{speciality}</p>
                </div>
                <div className="flex justify-center items-center pl-5">
                  <div className=" mr-2">
                    <FaRegRegistered size="12" />
                  </div>
                  <div>
                    <p className="text-xl ">License No: BD{licenseNumber}</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-5 text-lg">
                <div> Availability:</div>
                <div className="flex pl-5">
                  {availability.map((day) => (
                    <div className="badge badge-soft badge-warning px-3 ml-5">
                      {day}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 text-lg">
                Consultation Fee:
                <span className="text-green-400 font-semibold">
                  {" "}
                  Tk. {fees}
                </span>
              </div>
            </div>
          </div>
        </div>
        <p></p>
      </div>
      <div>
        <div className="mt-5">
          <div className="  border-2 rounded-2xl">
            <div className=" mt-10">
              <h2 className=" text-center text-4xl ">Book an Appointment</h2>
              <div className=" flex justify-between items-center mx-20 my-5 py-5 border-2 border-dotted border-b-gray-300 border-t-gray-300 border-l-transparent border-r-transparent">
                <div className="text-xl font-semibold">Availability :</div>
                <div>
                  <div className="badge badge-soft badge-success text-xl px-5 py-4">
                    Today Lawyer Avaiable
                  </div>
                </div>
              </div>

              <div className="badge badge-soft badge-warning mx-18 font-semibold">
                {" "}
                <BiSolidMessageAltError size="12" />
                Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
              </div>
              <div className="flex justify-center bg-green-400 mx-20  text-2xl font-bold my-10 rounded-full ">
                <button
                  onClick={() => handelAppointment(lawyerDetailsId)}
                  className=" py-3 px-10 rounded-full"
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyersDetails;
