import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

function Menucards({  imgSrc, name }) {
  const [isActive, setisActive] = useState(false)

  return (
    <div
      className={`md:w-[160px] lg:w-[140px]  w-[80px] min-w-[80px] h-[120px] rounded-[10px] bg-[#fff] flex flex-col items-center justify-between p-1 shadow-xl cursor-pointer ${
        isActive ? `bg-orange-600 text-white` : ``
      } `}
    >
      <div
        className={`w-[40px] min-w-[40px] h-[40px] min-h-[40px] bg-orange-500 rounded-[100vw] p-1 flex justify-center items-center overflow-hidden ${
          isActive ? `bg-white` : ``
        } `}
      >
        <img className="object-contain w-full h-full " src={imgSrc} alt="" />
      </div>
      <h3
        className={`text-orange-400 font-medium transition duration-500 ${
          isActive ? `!text-white  ` : ``
        } `}
      >
        {name}
      </h3>
      <BsChevronRight
        className={`flex justify-center items-center bg-orange-500 rounded-[5px] text-white ${
          isActive ? `bg-white text-orange-500 transition duration-500 ` : ``
        } `}
        size={20}
      />
    </div>
  );
}

export default Menucards;
