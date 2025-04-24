import React from "react";
import Banner from "./../../Componants/Banner/Banner";
import Service from "../../Componants/Service/Service";
import Lawyers from "../../Componants/Lawyers/Lawyers";
import { useLoaderData } from "react-router";

const Home = () => {
  const LawyersData = useLoaderData();

  return (
    <div>
      Home
      <Banner></Banner>
      <Lawyers LawyersData={LawyersData}></Lawyers>
      <Service></Service>
    </div>
  );
};

export default Home;
