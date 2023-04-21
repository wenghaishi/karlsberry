import React from "react";

const Product = (props) => {
  return (
    <div className={`h-screen w-full flex flex-row items-center justify-center gap-16 ${ props.color}`}>
      <img src={props.img} alt="" className="object-cover w-80" />
      <div className="flex flex-col w-1/4 justify-center">
        <h1 className={`text-5xl font-semibold mb-12 text-left ${ props.text}`}>{props.name}</h1>
        <p className={`text-xl ${ props.text}`}>
          The marriage of sweet peach with oolong is brought to life with
          effervescence! All natural tea and real fruit juice lets you identify
          and taste the refreshing flavors.
        </p>
      </div>
    </div>
  );
};

export default Product;
