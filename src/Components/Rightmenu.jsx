import React from "react";
import DebitCard from "./DebitCard";
import SubMenuContainer from "./SubMenuContainer";
import CartItems from "./CartItems";
import { useStateValue } from "./StateProvider";

function Rightmenu() {
  const [{ cart }, dispatch] = useStateValue();
  let totalsum = 0;
  cart.forEach((element) => {
    totalsum += parseInt(element.price);
  });
  console.log(totalsum);
  return (
    <div
      className=" w-[350px] max-[400px]:max-w-[200px]  h-[calc(100%-60px)] bg-[#fff]  fixed right-0 top-0 z-[105] flex flex-col items-center py-0 px-[10px]
     transition-all duration-300 shadow-xl  "
    >
      {/* debit card container */}
      <div>
        <div>
          <DebitCard />
        </div>
      </div>
      {/* Cart item */}
      {!cart ? (
        <div></div>
      ) : (
        <div className="w-full    min-w-[320px] min-h-[150px]  py-0 px-[10px]   ">
          <SubMenuContainer className="" name={"Carts Item"} />
          <div className="w-[100%] min-h-[200px] max-h-[240px] min-[320px]:max-h-[200px] min-[320px]:min-h-[180px] sm:max-h-[180px] sm:min-h-[180px]  mt-10px  overflow-y-scroll overflow-x-hidden scrollbar-hide ">
            <div className="">
              {cart &&
                cart.map((data) => (
                  <CartItems
                    key={data.id}
                    itemId={data.id}
                    name={data.name}
                    imgSrc={data.imgSrc}
                    qty={4}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
          {/* Total cart price */}
          <div className="w-full flex justify-between items-center  px-[8px] mx-0 ">
            <h3 className="text-[18px] font-semibold text-[#2a2b3c] ">Total</h3>
            <p className="text-[18px] font-semibold text-[#2a2b3c]  ">
              <span className="text-[14px] text-orange-400 ">$ </span>
              {totalsum}
            </p>
          </div>
          <button className="outline-none border-none  w-full py-[10px] px-[10px] bg-orange-500 rounded-[100vw] text-[#faf9fb] text-[18px] font-semibold ">
            CheckOut
          </button>
        </div>
      )}
    </div>
  );
}

export default Rightmenu;
