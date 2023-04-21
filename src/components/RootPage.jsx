import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Product from "./Product";
import Product1 from "./Product1";
import Footer from "./Footer";

const RootPage = () => {
  return (
    <div className="flex flex-col">
        <Banner />
        <div className="relative inline z-50">
          <img
            src="bg.jpg"
            alt=""
            className="absolute object-cover mt-0 h-screen"
          />
          <Navbar />
        </div>
        <HeroSection />
        <Product />
        <Product1 />
        <Footer />
    </div>
  );
};

export default RootPage;
