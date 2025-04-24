import React from "react";
import { createBrowserRouter } from "react-router";

import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/Contact Us/ContactUs";
import LawyersDetails from "../Componants/LawyersDetails/LawyersDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/lawyerData.json"),
        Component: Home,
      },
      {
        path: "lawyers/:lawyerDetailsId",
        loader: () => fetch("/lawyerData.json"),
        Component: LawyersDetails,
      },
      {
        path: "mybookings",
        loader: () => fetch("/lawyerData.json"),
        Component: MyBookings,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contactus",
        Component: ContactUs,
      },
    ],
  },
]);
