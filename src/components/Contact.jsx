import React from "react";
import "../App.css";
import "../custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <section data-aos="fade-left" className="sectionC">
        <header className="sectionHeaderC">ALL FEEDBACK IS APPRECIATED</header>
        <header className="titleRM"> Contact Us</header>
        <p>
          If you have some questions or wish to give some thoughts on the app,
          don't hesitate to send us a message.
        </p>
        <p>
          In case you have issues with using the app we will try our best to
          assist you.
        </p>
        <p> You can always reach us via email at:</p>
        <Button className="btn" size="sm">
          jondoe007@example.com
        </Button>
      </section>
    </div>
  );
}

export default Contact;
