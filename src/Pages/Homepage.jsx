import React from "react";
import NavBar from "../components/NavBar";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import "../custom.scss";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Contents />
      <Footer />
    </div>
  );
};

export default Homepage;
