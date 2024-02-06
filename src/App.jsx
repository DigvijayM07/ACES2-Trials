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
import ProjectCard from "./components/ProjectCard";
import NewsLetter from "./components/NewsLetter";
import New from "./components/New";
import Gallery from "./components/ImageEffect";
import Test from "./components/Test";
import AboutUs from "./components/AboutUs";
import ImageEffect from "./components/ImageEffect";
import ModelBack from "./components/ModelBack";
import Back from "./components/Back";


function App() {
  useEffect(() => { 
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
    <Back />
    {/* <New /> */}
<Pic/> 
  <Team/>  
   {/* <Technical/>   */}
  {/*<Management/>
 <Sports/>
  <Cultural/>*/}
  {/* <NewsLetter/>  */}
  {/* <Gallery />*/}
  {/* <Footer/>    */}
  {/* <ProjectCard /> */}
  {/* <Test /> */}
  {/* <AboutUs /> */}
  {/* <ImageEffect /> */}
  {/* <ModelBack /> */}

    </> 
  );
}

export default App;
