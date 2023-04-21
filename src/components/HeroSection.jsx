import React from "react";
import { Parallax } from "react-scroll-parallax";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <div className="pt-96 xl:pt-0 md:h-screen hero z-20 flex flex-col justify-center items-center">
      <Parallax className="z-20">
        <div className="flex flex-col justify-center mt-40 items-center gap-10">
          <h1 className="z-40 md:text-3xl xl:text-6xl text-slate-600">
            Your favourite sparkling tea!
          </h1>
          <p className=" text-sm lg:text-lg xl:text-2xl w-1/2 z-20">
            Cold brewed with organic tea, fruit juices, botanical infusions and
            antioxidants without sugar or sweeteners to keep you healthy, fun &
            sparkling.
          </p>
        </div>
      </Parallax>
      <Parallax speed={-20}>
        <div className="mb-10">
          <img src="hero.png" alt="" className="h-36 flex md:h-40 lg:h-60 xl:h-96 mt-20 z-10 object-cover"/>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroSection;
