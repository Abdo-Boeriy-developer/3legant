"use client";
import React, { createContext } from "react";
const CartStorContext = createContext({});

interface childrenType {
  children: React.ReactNode;
}

const CartContext = ({ children }: childrenType) => {
  return (
    <>
      <CartStorContext value={{}}>{children}</CartStorContext>
    </>
  );
};

export default CartContext;
