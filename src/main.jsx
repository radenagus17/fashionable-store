import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// product provider
import ProductProvider from "./context/ProductContext";
// sidebar provider
import SidebarProvider from "./context/SidebarContext";
// cart provider
import CartProvider from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <SidebarProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </SidebarProvider>
  </CartProvider>
);
