import React, { useEffect } from "react";
import "./effect.css";
import AOS from "aos";
import "aos/dist/aos.css";
import K from "../assets/events2223/1k.png";
import Cloud from "../assets/events2223/cloud.png";
import Compose from "../assets/events2223/compose.png";
import DSA from "../assets/events2223/dsa.png";
import GCCP from "../assets/events2223/gccp.png";
import Info from "../assets/events2223/infosession.png";

const ImageEffect = () => {
  const handleMouseEnter = (event) => {
    event.target.classList.remove("zoom-in", "original-color");
  };

  const handleMouseLeave = (event) => {
    event.target.classList.add("zoom-in", "original-color");
  };

  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  const groupedImages = [
    [
      { src: K, alt: "Your Image Alt Text", aosProps: { animation: "fade-left", delay: "200", duration: "800", easing: "ease-in-out" } },
      { src: DSA, alt: "Your Image Alt Text", aosProps: { animation: "fade-right", delay: "200", duration: "800", easing: "ease-in-out" } },
    ],
    [
      { src: Compose, alt: "Your Image Alt Text", aosProps: { animation: "fade-left", delay: "200", duration: "800", easing: "ease-in-out" } },
      { src: GCCP, alt: "Your Image Alt Text", aosProps: { animation: "fade-left", delay: "200", duration: "800", easing: "ease-in-out" } },
    ],
    [
      { src: Info, alt: "Your Image Alt Text", aosProps: { animation: "fade-right", delay: "200", duration: "800", easing: "ease-in-out" } },
      { src: Cloud, alt: "Your Image Alt Text", aosProps: { animation: "fade-left", delay: "200", duration: "800", easing: "ease-in-out" } },
    ],
    // Add more groups as needed
  ];

  const renderImageContainer = (group, groupIndex) => (
    <div key={groupIndex} className="m">
      {group.map((image, index) => (
        <div key={index} className="outer pic-bg">
          <div
            data-aos={image.aosProps.animation}
            data-aos-delay={image.aosProps.delay}
            data-aos-duration={image.aosProps.duration}
            data-aos-easing={image.aosProps.easing}
            className="image-container m-[5rem] transform-gpu hover:scale-90 transition-transform ease-in-out duration-[350ms]"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="m-[100px] overflow-hidden relative rounded-xl grayscale hover:grayscale-0 transform-gpu hover:scale-105 transition-transform ease-in-out duration-[350ms]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <h3
              data-aos="flip-up"
              className="translate-x-9 absolute text-white font-extrabold text-2xl"
            >
              ---About---
            </h3>
          </div>
        </div>
      ))}
    </div>
  );

  return <>{groupedImages.map((group, index) => renderImageContainer(group, index))}</>;
};

export default ImageEffect;
