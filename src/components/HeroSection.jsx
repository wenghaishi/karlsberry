import React from "react";
import { Parallax } from "react-scroll-parallax";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <div className="h-screen hero z-20 flex flex-col justify-center items-center">
      <Parallax className="z-20">
        <div className="flex flex-col justify-center mt-40 items-center gap-16">
          <h1 className="z-40 text-6xl text-slate-600">
            Your favourite sparkling tea!
          </h1>
          <p className="text-2xl w-1/2 z-20">
            Cold brewed with organic tea, fruit juices, botanical infusions and
            antioxidants without sugar or sweeteners to keep you healthy, fun &
            sparkling.
          </p>
        </div>
      </Parallax>
      <Parallax speed={-20}>
        <div>
          <img src="hero.png" alt="" className="h-96 mt-20 z-10"/>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroSection;
