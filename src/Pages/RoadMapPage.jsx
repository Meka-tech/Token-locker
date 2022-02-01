import React from "react";
import NavBar from "../components/NavBar";
import RoadMap from "../components/RoadMap";
import Footer from "../components/Footer";
import "../custom.scss";

const RoadMapPage = () => {
  return (
    <div>
      <NavBar />
      <RoadMap />
      <Footer />
    </div>
  );
};

export default RoadMapPage;
