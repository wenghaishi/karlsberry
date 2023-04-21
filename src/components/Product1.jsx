import React from "react";

const Product1 = () => {
  return (
    <div className="h-screen w-full bg-[#B6A5C8] flex flex-row items-center justify-center gap-16">
      <img src="p1.webp" alt="" className="object-cover w-80" />
      <div className="flex flex-col items-center w-1/4 justify-center">
        <h1 className="text-5xl font-semibold mb-12">Blackberry Purple Tea</h1>
        <p className="text-xl">
          A unique blend which embodies a royal purple hue is set to tease your
          tastebuds with the sweet and tart notes of the blackberry. Purple tea
          also has the most antioxidants than any other tea leaf!
        </p>
      </div>
    </div>
  );
};

export default Product1;
