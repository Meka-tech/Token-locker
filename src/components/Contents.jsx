import React from "react";
import "../App.css";
import "../custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contents = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section data-aos="fade-up" className="section1">
        <header>
          <h1 className="title">Token Locker</h1>
        </header>
        <p>
          Safely keep your tokens locked for a time period of your own choosing.
        </p>
        <p>
          Prevents you from making bad decisions and selling too early. It's
          free to use if you respect the unlock date for withdrawal that you
          have chosen.
        </p>
        <p>
          {" "}
          There is a penalty fee that you pick on deposit to protect yourself
          from trying to withdraw before the unlock date.
        </p>
        <Button className="btn">Launch app</Button>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <p>
              Have you ever seen a token you once owned jump 10x after a year
              since you sold it and regretted it?
            </p>
            <div data-aos="fade-right" className="col-sm">
              <header className="sectionHeader">SECURE AND OPEN SOURCE</header>
              <header className="sectionUse">Easy to use</header>

              <p className="details">
                By depositing your tokens in a time-locked smart contract wallet
                you prevent market volatility influencing your long term
                investing decisions.
              </p>
            </div>
            <div data-aos="fade-left" className="col-sm">
              <img
                className="images"
                src={require("../Images/Easy to Use.jpg")}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div data-aos="fade-up" className="container">
          <div className="row">
            <div className="col-sm">
              <header className="sectionHeader">NO HIDDEN FEES</header>
              <header className="sectionUse">Transparent costs</header>

              <p className="details">
                After the time period you set when depositing passes, you will
                be able to withdraw your tokens and the only cost will be the
                transaction gas cost.
              </p>
            </div>

            <div className="col-sm">
              <img
                className="images"
                src={require("../Images/Transparent.jpg")}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div data-aos="flip-left" className="container">
          <div className="row">
            <div className="col-sm">
              <header className="sectionHeader">
                PREVENTS HASTY DECISIONS
              </header>
              <header className="sectionUse">Keep your long term plans</header>
              <p className="details">
                If you change your mind and want to instantly withdraw without
                respecting the locked time period in order to discourage the
                user a fee of 20 percent will be applied
              </p>
            </div>
            <div className="col-sm">
              <img className="images" src={require("../Images/Gains.jpg")} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contents;
