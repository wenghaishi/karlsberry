import React from "react";

const Product = (props) => {
  return (
    <div className={`h-screen w-full z-20 flex flex-row items-center justify-center gap-6 md:gap-16 ${ props.color}`}>
      <img src={props.img} alt="" className="object-cover flex w-3/12 md:max-w-5xl" />
      <div className="flex flex-col w-2/4 md:w-1/4 justify-center">
        <h1 className={`md:text-5xl text-lg font-semibold mb-12 text-left ${ props.text}`}>{props.name}</h1>
        <p className={`md:text-xl text-sm ${ props.text}`}>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Product;
