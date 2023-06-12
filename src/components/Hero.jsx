import React from "react";
import WomanHero from "../assets/img/woman_hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-hero h-[800px] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center font-semibold uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3" />
            new trends
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] mb-4 font-light">
            AUTUMN SALE STYLES
            <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link to={"/"} className="uppercase font-semibold border-primary border-b-2 self-start">
            discover more
          </Link>
        </div>

        {/* image */}
        <div className="hidden lg:block">
          <img src={WomanHero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
