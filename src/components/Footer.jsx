import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex h-14 flex-row justify-center items-center footer gap-4 bottom-0">
      <a href="https://www.instagram.com/sylvesterpillay"><AiOutlineInstagram className="text-2xl text-zinc-200"/></a>
      <div className=" text-zinc-200"> Brewing soon in Singapore. 2023.</div>
    </div>
  );
};

export default Footer;
