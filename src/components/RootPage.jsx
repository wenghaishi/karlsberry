import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Product from "./Product";
import Footer from "./Footer";
import RootEnd from "./RootEnd";

const RootPage = () => {
  const products = [
    {
      name: "Peach Oolong Tea",
      description:
        "The golden marriage of sweet peach with oolong is brought to life with effervescence! Organic tea and real fruit juice lets you identify and taste the refreshing flavors. Oolong tea helps burn fat and reduces stress.",
      bgColor: "bg-[#F5D467]",
      img: "p.webp",
      text: "text-[#CC7722]",
    },
    {
      name: "Blackberry Purple Tea",
      description:
        "A unique blend which embodies a royal purple hue is set to tease your tastebuds with the sweet and tart notes of the blackberry. Purple tea also has the most antioxidants than any other tea leaf!",
      bgColor: "bg-[#B6A5C8]",
      img: "p1.webp",
      text: "text-[#0A0B21]",
    },
    {
      name: "Rose White Tea",
      description:
        "We steep pink rosa damascena buds to create a beautiful pink hue while extracting the luscious aroma and flavour. White tea reduces the risk of heart disease and osteoporosis among many other benefits.",
      bgColor: "bg-[#ECC5DC]",
      img: "p2.webp",
      text: "text-[#C4478F]",
    },
    {
      name: "Mango Black Tea",
      description:
        "You will love the refreshing taste of alphonso mango balanced with the earthiness of black tea. Light on your palette yet full-bodied. Black tea improves focus and lowers blood sugar levels.",
      bgColor: "bg-[#9E8C6E]",
      img: "p3.webp",
      text: "text-[#352423]",
    },
    {
      name: "Elderflower Green Tea",
      description:
        "Move aside jasmine green tea! We steep elderflowers instead to infuse the unique sweet floral notes into the popular tea. Green tea boosts your metabolism and is high in polyphenols.",
      bgColor: "bg-[#D0DE7F]",
      img: "p4.webp",
      text: "text-[#185A37]",
    },
    {
      name: "Apple Rooibos Tea",
      description:
        "Consciously blended with children in mind and for adults who prefer decaf, we steep caffeine-free rooibos leaves that produces a ravishing red color and flavor it with natural gala apple juice.",
      bgColor: "bg-[#EA8C7C]",
      img: "p5.webp",
      text: "text-[#A11C16]",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="relative inline z-50">
        <img
          src="banner.png"
          alt=""
          className="absolute object-cover mt-0 h-screen"
        />
        <Navbar />
      </div>
      <HeroSection />
      {products.map((product) => (
        <Product
          name={product.name}
          description={product.description}
          color={product.bgColor}
          img={product.img}
          text={product.text}
        />
      ))}
      <RootEnd />
      <Footer />
    </div>
  );
};

export default RootPage;
