import React, { useState, useEffect, createContext } from "react";

// create cart context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // state cart
  const [cart, setCart] = useState([]);
  // state amount
  const [itemAmount, setItemAmount] = useState(0);
  // state total price
  const [total, setTotal] = useState(0);

  // update total price
  useEffect(() => {
    if (cart) {
      const subTotal = cart.reduce((acumulator, currentItem) => {
        return acumulator + currentItem.price * currentItem.amount;
      }, 0);
      setTotal(subTotal);
    }
  }, [cart]);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acumulator, currentItem) => {
        return acumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //   function add to cart
  const addToCart = (product, id) => {
    //   function add to cart
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    // if item have already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  // function remove to cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  // function increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //  function decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else return item;
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) removeFromCart(id);
  };
  return <CartContext.Provider value={{ addToCart, cart, removeFromCart, setCart, increaseAmount, decreaseAmount, itemAmount, total }}>{children}</CartContext.Provider>;
};

export default CartProvider;
