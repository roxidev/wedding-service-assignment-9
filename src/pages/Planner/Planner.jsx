import React from 'react';
import planner1 from '../../assets/author1.jpg';
import planner2 from '../../assets/author2.jpg';
import planner3 from '../../assets/author3.jpg';
import planner4 from '../../assets/author4.jpg';
const Planner = () => {
  return (
    <>
      <h2 className="text-4xl text-center font-extrabold mt-28 mb-14">
        Wedding Planner
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-3 w-4/6 mx-auto">
        {/* 1 */}
        <div className="flex gap-6">
          <img className="w-20 rounded-full" src={planner1} alt="" />
          <div>
            <p>Name:Zara Alam</p>
            <p>Email:zaraala@.com</p>
            <p>Phone:9823543</p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex gap-6">
          <img className="w-20 rounded-full" src={planner2} alt="" />
          <div>
            <p>Name:Rashadul Alam</p>
            <p>Email:rashadul@.com</p>
            <p>Phone:9876543</p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex lg:justify-end gap-6">
          <img className="w-20 rounded-full" src={planner3} alt="" />
          <div>
            <p>Name:Al-amin</p>
            <p>Email:alamin@.com</p>
            <p>Phone:3526543</p>
          </div>
        </div>
        {/* 4 */}
        <div className="flex lg:justify-end gap-6">
          <img className="w-20 rounded-full" src={planner4} alt="" />
          <div>
            <p>Name:Mahbubul Alam</p>
            <p>Email:mahbubul@.com</p>
            <p>Phone:98763642</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planner;
