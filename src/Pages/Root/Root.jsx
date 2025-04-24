import React from "react";
import NavBar from "../../Componants/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../../Componants/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-11/12 mx-auto ">
      <NavBar></NavBar>

      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Root;
