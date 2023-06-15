import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { ShoppingCartRounded } from "@mui/icons-material";
import pizza from "../images/pizza.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Rightmenu from "./Rightmenu";
import { BsCart3, BsCartCheckFill } from "react-icons/bs";
import { useStateValue } from "./StateProvider";

function Header() {
  const [isOpen, setIsOpen] =useState(false);
  const [{ cart }, dispatch] = useStateValue();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <header className=" fixed top-0 left-0 z-[101] shadow-lg flex items-center justify-between pt-1 pb-1 pl-3 pr-3 h-[60px] w-full bg[#fff]  ">
      <img src={pizza} alt="" className="min-w-[40px] w-[50px]  " />
      {/* input box */}
      <div className="flex w-[120px] rounded-lg border-2 bg-[#fff] items-center overflow-x-hidden   ">
        <SearchRoundedIcon className="" />
        <input
          className="pl-2 outline-none "
          type="text"
          placeholder="search.."
        />
      </div>
      {/* Shopping cart */}

      <div className="relative w-7 h-7    flex justify-center  ">
        <BsCart3
        size={25}
          onClick={toggleDrawer}
          className=" "
        />
        <div className="w-5 h-5 bg-orange-600 rounded-full min-w-[20px] min-h-[20px] flex  justify-center absolute top-[-8px] right-0 animate-bounce ">
          <p className="font-extrabold text-white  ">{cart.length}</p>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla "
        >
          <div>
            <Rightmenu />
          </div>
        </Drawer>
      </div>
      {/* profile container */}

      <div className="flex w-10 h-10 min-w-[40px] rounded-[100vw] bg-[#444] items-center justify-center overflow-hidden ">
        <div className="">
          <img
            className="w-full h-full object-cover  "
            src="https://lh3.googleusercontent.com/a/AAcHTtez30eepTCC0MZ4KSjMoA7TVh1mHe8eJPqHY-w2ww=s432-c-no"
            alt=""
          />
        </div>
        <h2 className="text-[16px] ml-2 font-medium items-center hidden ">
          Asif Basha
        </h2>
      </div>
    </header>
    // </HeaderContext.Provider>
  );
}

export default Header;
