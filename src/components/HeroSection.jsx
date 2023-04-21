import React from "react";
import { Parallax } from "react-scroll-parallax";

const HeroSection = () => {
  return (
    <div className="h-screen hero z-10 flex flex-col justify-center items-center">
      <Parallax>
        <div>
          <h1 className="z-40 text-5xl text-slate-600">We are the Juice that Pops</h1>
        </div>
      </Parallax>
      <Parallax speed={-20}>
        <div>
          <img src="logo.png" alt="" className="z-10" />
        </div>
      </Parallax>
    </div>
  );
};

export default HeroSection;