import React from 'react';

const Hero = () => {
  return (
    <div className="flex gap-4 bg-[#faf8f8] mt-20">
      <img className="  w-3/6  " src="hero.jpg" alt="" />

      <div className="flex  items-center ">
        <div className="flex-col  ">
          <h2 className=" text-4xl text-center content-center font-bold ">
            Visit Our Page & Get More Then
            <span className="text-pink-400">30%</span> Discount. <br />
            <button className="btn  bg-pink-400 ">Discount</button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
