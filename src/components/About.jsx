import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="about flex justify-center">
      <Navbar className="none"/>
      <div className="flex flex-row justify-center relative items-start gap-16 mt-44">
        <img src="about.gif" alt="" className="rounded-lg drop-shadow-sm md:fixed flex h-auto about-img"/>
        <p className="w-1/2 text-lg about-box pb-32">
          <span className="font-semibold text-4xl ">A father & son’s love. </span>
          <br></br>
          <br></br>
          Ever since my dear son was born in 2019, we would
          spend time together learning, singing, playing, cooking, juicing and
          more like every father and child would. 
          <br></br>
          <br></br>
          Unfortunately, I went through a
          very long and bitter divorce which wore me out financially, physically
          and emotionally. It worsened when my beloved golden retriever of 14
          years had also passed on in 2021. The outcome of the divorce in late
          2022 led to further heartbreak as the access to my son had been
          drastically reduced. 
          <br></br>
          <br></br>
          Feeling misery, injustice and loneliness, I felt
          that I had lost everything and was at the brink of having suicidal
          thoughts. Even though I had always put on the biggest smile in front of
          my son, he could sense the despair within. 
          <br></br>
          <br></br>
          One day in 2023 he told me,
          “Daddy, don’t be sad. I’m here for you.” I was caught by surprise and we
          just hugged with tears in my eyes. I decided to give him the world.

          <br></br>
          <br></br>
          Karlsberry was crafted out of love and named after my darling little
          boy, Karl. 
          <br></br>
          <br></br>
          Karl loves apples and blackberries. Every time he drinks
          fresh apple juice, he would playfully call it apple tea. It was also
          difficult to find an apple tea without caffeine. That inspired me to
          create the Apple Rooibos Sparkling Tea which is the only version without
          caffeine and great for kids. 
          <br></br>
          <br></br>
          We hope that every time you enjoy a
          Karlsberry, it inspires you to count your blessings and cherish
          relationships with your loved ones and friends. You are precious. God
          bless you.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;