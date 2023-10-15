import React from 'react';
import vanueImage from '../../assets/vanue.jpg';
const Vanue = () => {
  return (
    <div className="flex items-center">
      <div className="w-3/6">
        <h2 className=" text-4xl text-center content-center font-bold w-4/6">
          Wellcome for Visit Our
          <span className="text-pink-400"> Wedding </span>Vanue <br />
          <button className="btn  bg-pink-400 ">Search</button>
        </h2>
      </div>
      <img className="w-3/6" src={vanueImage} alt="" />
    </div>
  );
};

export default Vanue;
