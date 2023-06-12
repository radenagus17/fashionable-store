import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { open, setOpen, handleClose } = useContext(SidebarContext);
  const { cart, setCart, removeFromCart, increaseAmount, decreaseAmount, itemAmount, total } = useContext(CartContext);
  // console.log(open);
  return (
    <div className={`${open ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        {/* icons */}
        <div onClick={handleClose} className="w-8 h-8 flex items-center justify-center cursor-pointer">
          <IoMdArrowForward className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col h-[520px] overflow-y-auto overflow-x-hidden gap-y-2 lg:h-[640px] border-b">
        {cart.map((item) => (
          <CartItem key={item.id} cart={item} removeFromCart={removeFromCart} increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-3">
        <div className="flex justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div onClick={() => setCart([])} className="cursor-pointer text-white w-12 h-12 bg-red-500 py-2 flex justify-center items-center text-xl">
            <FiTrash2 />
          </div>
        </div>
        <Link to={"/"} className="bg-gray-200 p-4 flex justify-center text-primary font-medium">
          View Cart
        </Link>
        <Link className="bg-primary text-white p-4 flex justify-center font-medium">Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
