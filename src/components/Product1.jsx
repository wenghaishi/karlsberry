import React from "react";

const Product1 = () => {
  return (
    <div className="h-screen w-full product1 flex flex-row items-center justify-center gap-16">
      <img src="m-pineapple.png" alt="" className="object-cover w-80" />
      <div className="flex flex-col items-center w-1/4 justify-center">
        <h1 className="text-5xl font-semibold mb-12">Lime Hibiscus Rooibos Tea</h1>
        <hr class="border-t-2 border-gray-300 my-8" />
        <p>
          Organic rooibos tea combined with ruby-red hibiscus and rosehips give
          a lemony-tart, berry-rich bite and maintains a healthy bod with every
          sip. A twist of lime plus bubbles makes this naturally caffeine-free
          tea a refreshing, all-day sipper.
        </p>
      </div>
    </div>
  );
};

export default Product1;
