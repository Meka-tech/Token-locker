import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <footer data-aos="fade-left" className="footer">
      <img className="logoFooter" src={require("../Images/TokenLocker.png")} />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Link className="link" to="/RoadMap">
              RoadMap
            </Link>
          </div>
          <div className="col-sm">
            {" "}
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
