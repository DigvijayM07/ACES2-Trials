import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import  Team from "./components/Team";
import  Cans from "./components/Cans";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
  <Team/>
    </>
  );
}

export default App;
