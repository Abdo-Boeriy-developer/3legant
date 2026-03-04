"use client";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { PriceRangeType } from "@/Types/priceRangeInput";
import { axiosInstans } from "@/utils/axios";

interface children {
  children: React.ReactNode;
}

interface StoreContextType {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<null | string>>;
  selectedPriceRange: PriceRangeType;
  setSelectedPriceRange: React.Dispatch<React.SetStateAction<PriceRangeType>>;
}

export const StoreContext = createContext<StoreContextType>({
  openMenu: false,
  setOpenMenu: () => {},
  isLogin: false,
  setIsLogin: () => {},
  sortBy: "all",
  setSortBy: () => {},
  selectedCategory: null,
  setSelectedCategory: () => {},
  selectedPriceRange: {
    label: "All Price",
    id: "allPrice",
    min: null,
    max: null,
  },
  setSelectedPriceRange: () => {},
});

const ContextProvider = ({ children }: children) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sortBy, setSortBy] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRangeType>({
    label: "All Price",
    min: null,
    max: null,
    id: "allPrice",
  });

  const getCartApi = async () => {
    try {
      const response = await axiosInstans(`cart`);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getCartApi();
  }, []);

  useEffect(() => {
    const token = Cookies.get("authorization");
    setIsLogin(!!token);
  }, []);

  return (
    <>
      <StoreContext.Provider
        value={{
          openMenu,
          setOpenMenu,
          sortBy,
          setSortBy,
          selectedCategory,
          setSelectedCategory,
          selectedPriceRange,
          setSelectedPriceRange,
          setIsLogin,
          isLogin,
        }}
      >
        {children}
      </StoreContext.Provider>
    </>
  );
};

export default ContextProvider;
