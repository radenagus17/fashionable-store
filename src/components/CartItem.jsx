import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";

const CartItem = ({ cart, removeFromCart, increaseAmount, decreaseAmount }) => {
  // destructure cart
  const { title, id, image, price, amount } = cart;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b w-full font-light text-gray-500 border-gray-200">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img src={image} className="max-w-[80px]" alt="" />
        </Link>
        <div className="flex-col flex w-full">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link to={`/product/${id}`} className="text-sm font-medium uppercase max-w-[240px] text-primary hover:underline">
              {title}
            </Link>
            {/* remove item icon */}
            <div className="text-xl cursor-pointer" onClick={() => removeFromCart(id)}>
              <IoMdClose className="text-gray-500 cursor-pointer hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div onClick={() => decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer">
                <IoMdRemove className="cursor-pointer" />
              </div>
              {/* amount */}
              <div className="h-full flex items-center justify-center px-2">{amount}</div>
              {/* plus icon */}
              <div onClick={() => increaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer">
                <IoMdAdd className="cursor-pointer" />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex justify-around items-center">$ {price}</div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">$ {parseFloat(price * amount).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
