import { useState, useEffect } from "react";

import { Home1, Home2, Home3, Home4, Home5 } from "../assets";
import { Navbar } from "../components";
import { Reveal } from "../utils";

const images = [Home1, Home2, Home3, Home4, Home5];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    transition: "background-image 1s ease-in-out",
    
  };

  return (
    <div className="w-full h-screen">
      <div
        className=" w-full h-full bg-fixed bg-no-repeat bg-cover bg-center object-cover"
        style={backgroundImageStyle}
      >
        <Navbar />

        <h1 className="relative flex flex-col text-center w-1/6 px-8 items-center justify-center min-w-fit text-gray-200 top-80 text-3xl md:text-5xl font-bold leading-tight font-primary backdrop-blur-sm bg-black/50">
          <Reveal
            childTransition={{ duration: 1, delay: 0.7 }}
            childStyle={{ background: "var(--brand)" }}
          >
            Your Dream It!
            <br />
            We Build It!
          </Reveal>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
