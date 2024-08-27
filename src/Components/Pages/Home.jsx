import React from "react";
import farmland from '../../assets/image/farm-land.png';
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero-text-box">
          <h1>
            The Role of Technology <br />
            in Revolutionizing
            <br /> Agriculture
          </h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </p>
          <div className="primary-btn">
            <a href="#" className="get-strt-btn">
              Get Started
            </a>

            <a href="#" className="learn-mre-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <section className="passion-sect">
        <div className="text-section">
          <h2>
            Our Passion for Agriculture Nurturing Growth and Sustaining the
            Future
          </h2>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular..
          </p>
          <a href="#" className="get-strt-btn">
            Get Started
          </a>
        </div>
        <div className="farmland-image">
          <img src={farmland} alt="farm land" />
          <a href="#" className="get-strt-btn">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};
