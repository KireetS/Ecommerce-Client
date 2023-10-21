import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-full bg-slate-950 flex items-center justify-between">
        <div className="flex text-center justify-center ">
          <h1 className="text-white font-bold text-3xl p-3">Ecommerce</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-gray-200 font-semibold text-base mr-2 p-2">
            Home
          </div>
          <div className="text-gray-200 font-semibold text-base mx-2 p-2">
            Products
          </div>
          <div className="text-gray-200 font-semibold text-base ml-2 p-2">
            Add Products
          </div>
        </div>
        <div className="text-white font-semibold text-base p-4 ">User</div>
      </div>
    </>
  );
};

export default Navbar;
