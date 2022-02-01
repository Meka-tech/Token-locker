import React from "react";
import Contact from "../components/Contact";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../custom.scss";

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
