import React, { useState } from "react";
import assets from "../assets/assets";
import hero from "../assets/assets";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setTimeout(() => {
      const isLastSlide = currentIndex === assets.hero.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 8000);
  };
  return (
    //max-w-[1400px] h-[700px]
    <div className="grid grid-cols-[1.7fr_1fr] gap-0  pt-5 px-6">
      <div className=" max-w-[840px] h-[420px]">
        {/*    } */}
        <img
          onAnimationStart={nextSlide()}
          src={assets.hero[currentIndex].img}
          className="cursor pointer w-full h-full rounded-xl bg-center bg-cover"
        ></img>
      </div>
      <div className="flex flex-col gap-2">
        <div
          style={{ backgroundImage: `url(${assets.women})` }}
          className="flex h-fit flex-col gap-8 bg-[#0D0D0D] bg-right-top bg-contain bg-no-repeat text-slate-200 py-4 px-4 rounded-lg"
        >
          <h1 className="text-3xl font-bold text-[--Lime]">Women's Collection</h1>
          <p className="tracking-wider text-gray-400">
            Luxurious, stylish products that <br /> give you a demure look.{" "}
          </p>
          <button className="border-b hover:border-[--Lime] hover:text-[--Lime] w-1/5">
            Shop Now
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${assets.men})` }}
          className="flex h-fit flex-col gap-8 bg-[--Lime] bg-right-top bg-contain bg-no-repeat text-gray-900 py-4 px-4 rounded-lg"
        >
          <h1 className="text-3xl font-bold">Men's Collection</h1>
          <p className="tracking-wider text-gray-900 font-medium">
            Clothing made for <span className="font-extrabold">KINGS</span>. <br /> Are you a king?{" "}
          </p>
          <button className="border-b border-gray-900 hover:border-slate-200 hover:text-slate-200 w-1/5">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
