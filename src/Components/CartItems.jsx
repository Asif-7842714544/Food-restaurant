import React, { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

let cartItems=[]

function CartItems({itemId, name, imgSrc, price }) {
const [qty, setqty] = useState(1)
const [itemPrice, setitemPrice] = useState(parseInt(qty)*parseFloat(price))
const [{cart},dispatch]=useStateValue()

useEffect(() => {
 cartItems=cart;
 setitemPrice(parseInt(qty)*parseFloat(price))
}, [qty])


const updateQty=(action,id)=>{
    if(action==='add') setqty(qty+1)
    else{
      if(qty==1) {
       cartItems.pop(id)
       dispatch({
        type:'SET_CART',
        cart:cartItems,
       })
      }
      setqty(qty-1)
    } 
  }

  return (
    <div className="flex items-center my-[8px] mx-0  ">
      {/* image */}
      <div className="w-[60px] min-w-[60px] h-[60px] min-h-[60px]  bg-[#00ffc855] rounded-[10px] flex items-center justify-center p-1 ">
        <img className="w-full h-full object-contain  " src={imgSrc} alt="" />
      </div>
      {/* item section */}
      <div className="ml-[10px]  ">
        <h2 className="text-[16px] text-[#2a2b3c] ">{name}</h2>
        <div className="text-[16px] text-[#2a2b3c] flex items-center justify-between w-[120px]  ">
          <span className="text-[#f8901c] ">x {qty}</span>
          <div className="flex items-center justify-between cursor-pointer w-[60px] ">
            <MdRemoveCircleOutline
            onClick={()=>updateQty('remove',itemId)}
              className="text-[#2a2b3c] !text-[24px] "
              size={20}
            />
            <MdAddCircleOutline
            onClick={()=>updateQty('add',itemId)}
              className="text-[#2a2b3c] !text-[24px] "
              size={20}
            />
          </div>
        </div>
      </div>
      {/* item price */}
      <p className="text-[16px] font-semibold text-[#2a2b3c] ml-auto ">
        <span className="text-orange-400 ">$ </span>
        <span className="">{itemPrice}</span>
      </p>
    </div>
  );
}

export default CartItems;
