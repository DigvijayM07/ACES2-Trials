import React from "react";
import Lottie from "lottie-react";
import girl from "../assets/font/stand.json";
import girl1 from "../assets/font/robot.json";
import { projects } from "./project.js";
import ProjectCard from "./ProjectCard.jsx";
import Test from "./Test.jsx";

const New = () => {
  const lottieContainerStyle = {
    width: "400px", // Adjust the width
    height: "400px", // Adjust the height
    display: "flex",
    flexDirection: "column", // Display Lotties in a column
    alignItems: "center",
    margin: "10px", // Adjust the vertical margin
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-5 pic-bg scroll-smooth">
      <p
        className="rog text-8xl font-extrabold mb-4 text-white"
        data-aos="zoom-out"
        data-aos-delay="300"
      >
        Project
      </p>
      <div
        className="lottie-container"
        data-aos="zoom-in-down"
        data-aos-delay="400"
        style={lottieContainerStyle}
      >
        {/* <Lottie animationData={girl1} /> */}
        {/* <div style={{ marginTop: "-70px" }}>
              {/* <Lottie animationData={girl} /> 
            </div> */}
        <div className="container">
          <div className="item" style={{ "--i": 0 }}></div>
          <div className="item" style={{ "--i": 1 }}></div>
          <div className="item" style={{ "--i": 2 }}></div>
          <div className="item" style={{ "--i": 3 }}></div>
          <div className="item" style={{ "--i": 4 }}></div>
          <div className="item" style={{ "--i": 5 }}></div>
          <div className="item" style={{ "--i": 6 }}></div>
          <div className="item" style={{ "--i": 7 }}></div>
          <div className="item" style={{ "--i": 8 }}></div>
          <div className="item" style={{ "--i": 9 }}></div>
          <div className="item" style={{ "--i": 10 }}></div>
          <div className="item" style={{ "--i": 11 }}></div>
          <div className="item" style={{ "--i": 12 }}></div>
          <div className="item" style={{ "--i": 13 }}></div>
          <div className="item" style={{ "--i": 14 }}></div>
          <div className="item" style={{ "--i": 15 }}></div>
          <div className="item" style={{ "--i": 16 }}></div>
          <div className="item" style={{ "--i": 17 }}></div>
          <div className="item" style={{ "--i": 18 }}></div>
          <div className="item" style={{ "--i": 19 }}></div>
          <div className="item" style={{ "--i": 20 }}></div>
        </div>
      </div>
      <Test projects={projects} />
    </div>
  );
};

export default New;
