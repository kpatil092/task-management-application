import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-white shadow h-16 items-center justify-start">
      <div className="flex gap-5 ml-5">
        <img src="./tma-logo.png" alt="logo" height={30} width={60} />
        <h2 className="text-[2.5rem] font-[bolder]">Tasker</h2>
      </div>
    </div>
  );
};

export default Navbar;
