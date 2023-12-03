import React, { useState, useEffect } from "react";
import { FaPlayCircle, FaArrowCircleRight } from "react-icons/fa";
import home from "../../assets/home.jpg";
import "./homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = () => {
    setIsHovered(true);
  };

  const handleMouseL = () => {
    setIsHovered(false);
  };

  return (
    <div className="homepage">
      <div className="home-con" data-aos="zoom-out-up">
        <div className="home-text">
          <div className="home-t-text">
            <p>👋 WELCOME TO MANAGE WISE!</p>
          </div>
        </div>
        <h1>
          Empower your business with <span>Strategic</span> insights
        </h1>
        <h2>
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </h2>
        <div className="home-but">
          <button
            className="blue"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {hover ? (
              <>
                <span>Get Started</span> <FaArrowCircleRight />{" "}
              </>
            ) : (
              "Get Started"
            )}
          </button>
          <button className="white" o>
            Watch Demo &nbsp;
            <FaPlayCircle />
          </button>
        </div>
      </div>
      <div
        className={`home-image  ${isHovered ? "wobble" : ""}`}
       
      >
        <img
          src={home}
          alt="dashboard"
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouseL}
        />
      </div>
    </div>
  );
}

export default HomePage;
