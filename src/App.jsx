import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import  Team from "./components/Team";
import  Cans from "./components/Cans";
import  Pic from "./components/Pic";
import  Member from "./components/Member";
import  Card from "./components/Card";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
  <Pic/>
  <Team/>
  {/* <Member/> */}
    </>
  );
}

export default App;
