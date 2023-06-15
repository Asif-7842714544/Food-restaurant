import React, { useEffect, useState } from "react";
import "./Card.css";
import { AiFillStar } from "react-icons/ai";
import { Items } from "./Data";
import { useStateValue } from "./StateProvider";

let cartData = [];
function Card({ itemId, imgSrc, price, ratings, name }) {
  const [isCart, setCart] = useState("");
const [{},dispatch]=useStateValue()
  useEffect(() => {
    if (isCart){
      cartData.push(isCart);
      console.table(cartData);
      dispatch({
        type: 'SET_CART',
        cart: cartData,
      });

    } 
  }, [isCart]);

  const addtoCartitems = (e) => {
    e.preventDefault();
    setCart(Items.find((n) => n.id === itemId));
    // setCart[(Items.find((n) => n.id === itemId));
  };

  return (
    <div id={itemId} className="mt-8 flex items-center justify-center  ">
      <figure className="snip1268 shadow-2xl ">
        <div className="image">
          <div className="flex items-center justify-center w-[100px] h-[70px] min-h-[80px] min-w-[80px] max-h-[90px] ">
            <img className="" src={imgSrc} alt="sq-sample4" />
          </div>
          <i onClick={addtoCartitems} className="add-to-cart cursor-pointer">
            Add to Cart
          </i>
        </div>
        <figcaption className="">
          <h2 className="mt-2">{name}</h2>
          <div className="flex">
            {[...Array(ratings).keys()].map((e, i) => (
              <i key={i}>
                <AiFillStar className="text-orange-600" size={25} />
              </i>
            ))}
          </div>
          <div className="price">${price}</div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Card;
