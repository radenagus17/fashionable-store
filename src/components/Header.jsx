import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const { open, setOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listner
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img src={Logo} className="w-[40px]" alt="" />
          </div>
        </Link>
        {/* cart */}
        <div className="relative flex cursor-pointer" onClick={() => setOpen(!open)}>
          <BsBag className="text-2xl" />
          <div className="absolute -right-2 -bottom-2 bg-red-500 text-[12px] rounded-full text-white flex justify-center items-center w-[18px] h-[18px]">{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
