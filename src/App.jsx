import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { AiFillHome, AiTwotoneSetting } from "react-icons/ai";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import {
  MdAccountBalanceWallet,
  MdFavorite,
  MdSummarize,
} from "react-icons/md";
import BannerName from "./Components/BannerName";
import SubMenuContainer from "./Components/SubMenuContainer";
import Menucards from "./Components/Menucards";
import { MenuItems, Items } from "./Components/Data";
import Card from "./Components/Card";

function App() {
  const [isMainData, setisMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );

  //set main dish items in filter
  const setData = (itemId) => {
    setisMainData(Items.filter((element) => element.itemId == itemId));
  };

  return (
    <div className="scrollbar-hide w-[100vw] h-[100vh] overflow-x-hidden bg-[#faf9fb]  ">
      {/* Header */}
      <Header />
      {/* main */}

      <main className="w-full h-auto  mt-[60px] ">
        {/* Main content */}
        <div className="w-full h-auto bg-[#faf9fb] p-2 pb-[100px]    ">
          {/*Banner  */}
          <div
            className="w-full h-[130px] rounded-[10px] mt-2
           bg-[url('https://img.freepik.com/free-vector/v915_53876-174949.jpg?w=1060&t=st=1686557560~exp=1686558160~hmac=ef33a1c307f5343a485493bead508fa94176ac13e2da0ef59cadc589e52718c5')] 
           bg-no-repeat bg-cover relative flex items-center pl-[10px] pr-[10px]    "
          >
            <BannerName name={"Asif"} discount={"40"} />
            <img
              className=" absolute -right-[60px] -bottom-[10px] w-[170px] "
              src="https://static.vecteezy.com/system/resources/previews/008/492/234/large_2x/delivery-cartoon-illustration-png.png"
              alt=""
            />
          </div>
          {/* Dish Container */}
          <div className="w-full pt-2 pb-2 pl-0 pr-0 ">
            <div className="w-full ">
              <SubMenuContainer name={"Menu Category"} />
            </div>
            {/* menu items */}
            <div className="scrollbar-hide flex items-center justify-between overflow-x-scroll mt-[10px] mb-[10px] ml-0 mr-0 pt-[10px] pb-[10px] pl-0 pr-0 ">
              {MenuItems.map((item) => (
                <div
                  onClick={() => setData(item.itemId)}
                  className=""
                  key={item.id}
                >
                  <Menucards
                    id={item}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    isActive
                  />
                </div>
              ))}
            </div>
            {/* Dish container */}
            <div
              className="relative mb-2 grid grid-cols-1 space-x-2 
               sm:grid-cols-2 min-[425px]:grid-cols-2 md:grid-cols-4 
               lg:grid-cols-5 xl:grid-cols-6  "
            >
              {isMainData &&
                isMainData.map((item) => (
                  <Card
                    key={item.id}
                    itemId={item.id}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    ratings={item.ratings}
                    price={item.price}
                  />
                ))}{" "}
            </div>
          </div>
        </div>
      </main>
      {/* bottom menu */}
      <div
        className="rounded-full fixed bottom-0 left-0 flex items-center justify-center
       w-full h-[60px] bg-[#d5d5d5] z-[101]  "
      >
        <ul className="flex fixed items-center left-0 right-0 !justify-between ">
          <AiFillHome
            className=" hover:scale-125 text-purple-500 transition duration-200  "
            size={30}
          />
          <BsFillChatLeftTextFill
            className="hover:scale-125 text-purple-500 transition duration-200    "
            size={30}
          />
          <MdAccountBalanceWallet
            className="hover:scale-125 text-purple-500 transition duration-200    "
            size={30}
          />
          <MdFavorite
            className="hover:scale-125 text-purple-500 transition duration-200    "
            size={30}
          />
          <MdSummarize
            className="hover:scale-125 text-purple-500 transition duration-200    "
            size={30}
          />
          <AiTwotoneSetting
            className="hover:scale-125 text-purple-500 transition duration-200    "
            size={30}
          />
        </ul>
      </div>
    </div>
  );
}

export default App;
