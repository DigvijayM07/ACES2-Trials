import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import  Team from "./components/Team";
import  Cans from "./components/Cans";
import  Pic from "./components/Pic";
import  Technical from "./components/Technical";
import  Management from "./components/Management";
import  Sports from "./components/Sports";
import  Cultural from "./components/Cultural";
import  Card from "./components/Card";
import  Footer from "./components/Footer";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
    {/* <Pic/>
  <Team/> */}
  <Technical/>  
  {/* <Management/> */}
  {/* <Sports/> */}
  {/* <Cultural/> */}
  {/* <Footer/> */}
    </>
  );
}

export default App;
