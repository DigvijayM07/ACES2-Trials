import React from "react";
import { useSpring, animated } from 'react-spring';
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/banner-bg.png";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  const backgroundStyle = {
    backgroundImage: `url(${colorSharp2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5, // Adjust the opacity as needed
    zIndex: -1,
  };

  return (
    <div style={backgroundStyle}>
      <section className="project relative" id="projects">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <animated.div style={fadeInProps}>
              <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
              <p className="text-gray-600 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </animated.div>
          </div>

          <div className="mb-8">
            <ul className="flex justify-center space-x-4 mb-5" id="pills-tab">
              {/* ... Other code ... */}
            </ul>

            <div className="animate__animated animate__slideInUp relative z-10">
              <div id="slideInUp">
                <div id="projects-tabs">
                  <div id="first">
                    <animated.div style={fadeInProps}>
                      <div className="flex flex-wrap justify-center">
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </div>
                    </animated.div>
                  </div>
                  <div id="second" className="hidden">
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </div>
                  <div id="third" className="hidden">
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
