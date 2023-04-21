import React from "react";

const Product = () => {
  return (
    <div className="h-screen w-full bg-[#F0C83D] flex flex-row items-center justify-center gap-16">
      <img src="p.webp" alt="" className="object-cover w-80" />
      <div className="flex flex-col items-center w-1/4 justify-center">
        <h1 className="text-5xl font-semibold mb-12">Peach Oolong Tea</h1>
        <p className="text-xl">
          The marriage of sweet peach with oolong is brought to life with
          effervescence! All natural tea and real fruit juice lets you identify
          and taste the refreshing flavors.
        </p>
      </div>
    </div>
  );
};

export default Product;
