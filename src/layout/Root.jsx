import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="w-11/12 mx-auto bg-[#f6f1f1]">
      <Outlet />
    </div>
  );
};

export default Root;
