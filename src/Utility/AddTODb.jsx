import { Bounce, toast } from "react-toastify";

const getBookingLawyerStoredList = () => {
  const storedLawyerStr = localStorage.getItem("lawyerlist");

  if (storedLawyerStr) {
    const storedLawyerData = JSON.parse(storedLawyerStr);
    return storedLawyerData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedLawyerData = getBookingLawyerStoredList();

  if (storedLawyerData.includes(id)) {
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
  } else {
    storedLawyerData.push(id);
    const data = JSON.stringify(storedLawyerData);
    localStorage.setItem("lawyerlist", data);
    toast.success(" Your Appointment Placed Successfully!! ", {
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
  }
};

const handelCancelfromDB = (id) => {
  const LawyerData = getBookingLawyerStoredList();
  const lawyerupdateListDB = LawyerData.filter((lawyer) => lawyer.id !== id);
  localStorage.setItem("lawyerlist", JSON.stringify(lawyerupdateListDB));
};

export { addToStoredDB, getBookingLawyerStoredList, handelCancelfromDB };
