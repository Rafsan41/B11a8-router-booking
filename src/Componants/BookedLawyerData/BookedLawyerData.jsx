import React from "react";

const BookedLawyerData = ({ lawyer, handelCancel }) => {
  const { id, name, speciality, fees } = lawyer;

  return (
    <div>
      <div>
        <div className="mt-10 p-5  border-2 border-gray-400 rounded-2xl">
          <div>{name}</div>
          <div className="flex justify-between  py-5">
            <div>{speciality}</div>
            <div> Appointment Fees : {fees}</div>
          </div>
          <div className=" rounded-full btn btn-outline btn-error w-full">
            <button onClick={() => handelCancel(id)}>Cancel Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedLawyerData;
