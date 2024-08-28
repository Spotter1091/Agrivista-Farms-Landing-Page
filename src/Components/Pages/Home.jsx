import React from "react";
import farmland from '../../assets/image/farm-land.png';
import blog from "../../assets/icons/blog.png";
import website from "../../assets/icons/website.png";
import content from "../../assets/icons/content-stra.png";
import social from "../../assets/icons/social.png";
import rice from "../../assets/image/rice.png";
import wheat from "../../assets/image/wheat.png";
import pumpkin from "../../assets/image/pumpkin.png";
import cabbage from "../../assets/image/cabbage.png";



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
        <div className="content-box">
          <h2 className="passion-primary-text">
            Our Passion for Agriculture Nurturing Growth and Sustaining the
            Future
          </h2>
          <p className="passion-sub-text">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular..
          </p>
          <a href="#" className="passion-btn">
            Get Started
          </a>
        </div>
        <div className="farmland-img-box">
          <img src={farmland} className="farmland-img" alt="farm land" />
          <div className="start-year-box">
            <a href="#" className="start-year-btn">
              Since 1976
            </a>
          </div>
        </div>
      </section>

      <section className="our-service-section">
        <h2 className="our-service-heading">Our Service</h2>
        <p className="our-service-subtext">
          Li Europan lingues es membres del sam familie. Lor <br /> separat
          existentie es un myth Por scientie, musica.
        </p>
        <div className="cards-container">
          <div className="service-card">
            <img
              src={blog}
              className="service-card-img"
              alt="Blog and Article Writing"
            />
            <h3 className="service-card-text">
              Blog and
              <br /> Article Writing
            </h3>
          </div>
          <div className="service-card">
            <img
              src={website}
              className="service-card-img"
              alt="Website Content"
            />
            <h3 className="service-card-text">
              Website <br /> Content
            </h3>
          </div>
          <div className="service-card">
            <img
              src={content}
              className="service-card-img"
              alt="content strategy and consulting"
            />
            <h3 className="service-card-text">
              Content Strategy and Consulting
            </h3>
          </div>
          <div className="service-card">
            <img
              src={social}
              className="service-card-img"
              alt="Social Media Management"
            />
            <h3 className="service-card-text">Social Media Management</h3>
          </div>
        </div>
      </section>

      <section className="our-featured-product">
        <h2 className="our-featured-heading">Our Featured Product</h2>
        <p className="our-featured-subtext">
          Li Europan lingues es membres del sam familie. Lor <br /> separat
          existentie es un myth Por scientie, musica.
        </p>
        <div className="cards-container">
          <div className="farm-produce-card">
            <img
              src={rice}
              className="farm-produce-card-img"
              alt="Rice Field"
            />
            <h3 className="farm-produce-card-text">Rice</h3>
            <p className="farm-produce-subtext">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth.{" "}
            </p>
          </div>
          <div className="farm-produce-card">
            <img
              src={wheat}
              className="farm-produce-card-img"
              alt="Wheat field"
            />
            <h3 className="farm-produce-card-text">Wheat</h3>
            <p className="farm-produce-subtext">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth.{" "}
            </p>
          </div>
          <div className="farm-produce-card">
            <img
              src={pumpkin}
              className="farm-produce-card-img"
              alt="content strategy and consulting"
            />
            <h3 className="farm-produce-card-text">Pumpkin</h3>
            <p className="farm-produce-subtext">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth.{" "}
            </p>
          </div>
          <div className="farm-produce-card">
            <img
              src={cabbage}
              className="farm-produce-card-img"
              alt="Social Media Management"
            />
            <h3 className="farm-produce-card-text">Cabbage</h3>
            <p className="farm-produce-subtext">
              Li Europan lingues es membres del sam familie. Lor separat
              existentie es un myth.{" "}
            </p>
          </div>
        </div>
        <div className="all-product">
          <a href="">See all product</a>
        </div>
      </section>

      <section className="farming-tech">
        <div className="farming-tech-content">
          <h1 className="farming-tech-text">
            Sustainable Farming Meets Technology: Building a Greener Future
          </h1>
          <div className="farming-tech-btn">
            <a href="#" className="get-strt-btn">
              Learn More
            </a>

          
            <a href="#" className="learn-mre-btn">
              Contact Us
            </a>
          
          </div>
        </div>
      </section>
  
    </div>
  );
};
