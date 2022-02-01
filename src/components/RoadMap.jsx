import React from "react";
import "../App.css";
import "../custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DiCode, DiGoogleAnalytics, DiAtom, DiFirebase } from "react-icons/di";
import {
  AiFillApi,
  AiFillCloud,
  AiFillGold,
  AiFillLock,
  AiFillRocket,
} from "react-icons/ai";

const RoadMap = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <section data-aos="fade-up" className="section1RM">
        <header>
          <h1 className="titleRM">Feature Roadmap</h1>
        </header>
        <header className="sectionUseRM">
          Work in progress, planned or under consideration features:
        </header>
      </section>
      <section>
        <div className="container">
          <div data-aos="fade-up" className="row">
            <div className="col-sm">
              <DiCode className="icon" size={30} />

              <p className="cardheader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="cardcontent">
                Curabitur consectetur euismod dui et tristique. Integer
                elementum porttitor tortor ut elementum. Donec mollis commodo
                condimentum.
              </p>
            </div>
            <div className="col-sm">
              <DiGoogleAnalytics className="icon" size={30} />

              <p className="cardheader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="cardcontent">
                Curabitur consectetur euismod dui et tristique. Integer
                elementum porttitor tortor ut elementum. Donec mollis commodo
                condimentum. Duis lectus sapien, condimentum in commodo vitae,
                hendrerit condimentum nisi. Sed commodo, dolor vitae feugiat
                fringilla, magna urna ultrices massa, quis pharetra nisi turpis
                commodo nulla.
              </p>
            </div>
            <div className="col-sm">
              <DiAtom className="icon" size={30} />

              <p className="cardheader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="cardcontent">
                Curabitur consectetur euismod dui et tristique..
              </p>
            </div>
          </div>
          <div data-aos="fade-right" className="row">
            <div className="col-sm">
              <DiFirebase className="icon" size={25} />

              <p className="cardheader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="cardcontent">
                Curabitur consectetur euismod dui et tristique. Integer
                elementum porttitor tortor ut elementum. Donec mollis commodo
                condimentum. Duis lectus sapien, condimentum in commodo vitae,
                hendrerit condimentum nisi.
              </p>
            </div>
            <div className="col-sm">
              <AiFillApi className="icon" size={25} />

              <p className="cardheader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="cardcontent">
                Curabitur consectetur euismod dui et tristique. Integer
                elementum porttitor tortor ut elementum. Donec mollis commodo
                condimentum. Duis lectus sapien, condimentum in commodo vitae
              </p>
            </div>
            <div className="col-sm">
              <AiFillCloud className="icon" size={25} />

              <p className="cardheader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="cardcontent">
                Curabitur consectetur euismod dui et tristique. Integer
                elementum porttitor tortor ut elementum. Donec mollis commodo
                condimentum. Duis lectus sapien, condimentum in commodo vitae,
                hendrerit condimentum nisi.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="row">
            <div className="col-sm">
              <AiFillGold className="icon" size={25} />

              <p className="cardheader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="cardcontent">
                Curabitur consectetur euismod dui et tristique. Integer
                elementum porttitor tortor ut elementum. Donec mollis commodo
                condimentum.
              </p>
            </div>
            <div className="col-sm">
              <AiFillLock className="icon" size={25} />
              <p className="cardheader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="cardcontent">
                Curabitur consectetur euismod dui et tristique.
              </p>
            </div>
            <div className="col-sm">
              <AiFillRocket className="icon" size={25} />

              <p className="cardheader">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="cardcontent">
                Curabitur consectetur euismod dui et tristique. Integer
                elementum porttitor tortor ut elementum. Donec mollis commodo
                condimentum. Duis lectus sapien, condimentum in commodo vitae,
                hendrerit condimentum nisi. Sed commodo, dolor vitae feugiat
                fringilla, magna urna ultrices massa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadMap;
