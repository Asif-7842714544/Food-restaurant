import React from "react";

function BannerName({ name, discount}) {
  return (
    <div className="p-2 flex flex-col items-start justify-center ">
      <h3 className="text-lg font-medium text-[#2a2b3c]  ">Hello {name}</h3>
      <p className="text-sm w-[200px] text-[#525FAB] ">
        Get free discount for every
        <span className="text-orange-500 font-bold  ">${discount} </span>
        purchase
      </p>
      <a
        className="bg-orange-700 rounded-full 
         pt-1 pb-1 pl-[15px] pr-[15px] hover:bg-orange-500 cursor-pointer "
      >
        learn more
      </a>
    </div>
  );
}

export default BannerName;
