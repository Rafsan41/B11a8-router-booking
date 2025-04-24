import LawyerPhoto from "./../../assets/lawyer.png";
import { FaRegRegistered } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
const Lawyer = ({ lawyer }) => {
  const { id, image, name, speciality, experience, licenseNumber } = lawyer;

  const navigate = useNavigate();
  const handelNavigateDetails = () => {
    navigate(`/lawyers/${id}`);
  };

  return (
    <div>
      <div>
        <div className="">
          <div className="card mb-10 card-side bg-base-100  shadow-sm">
            <figure>
              <img
                className="w-44 h-60 p-2 rounded-3xl"
                src={image}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <div>
                <div className="badge badge-outline badge-success">
                  Available
                </div>
                <div className="ml-5 badge badge-outline badge-info">
                  {experience}+ Experience
                </div>
              </div>
              <div>
                <p className="text-4xl">{name}</p>
                <p className="mt-3 text-2xl">{speciality}</p>
                <div className="flex justify-self-start items-center">
                  <div className=" mr-2">
                    <FaRegRegistered size="15" />
                  </div>
                  <div>
                    <p className="text-xl ">License No: BD{licenseNumber}</p>
                  </div>
                </div>
              </div>

              <div className="card-actions flex justify-center items-center py-3 border border-green-400 rounded-full">
                <button
                  onClick={() => {
                    handelNavigateDetails(id);
                  }}
                  className=" text-blue-500"
                >
                  <NavLink to={`/lawyers/${id}`}>View Details</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
