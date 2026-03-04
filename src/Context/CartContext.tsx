"use client";
import React, { createContext, useEffect, useState } from "react";
import { axiosInstans } from "@/utils/axios";
// Type
interface children {
  children: React.ReactNode;
}

export interface Root {
  product: Product;
  quantity: number;
}

export interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  category: any[];
  stock: number;
  images: string[];
  offer: number;
  versions: Version[];
  rating: number;
  reviewsCount: number;
  reviews: any[];
  createdAt: string;
  updatedAt: string;
}

export interface Version {
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
  images: string[];
  _id: string;
}
//

export interface WishlistType {
  discount: number;
  _id: string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  category: any[];
  stock: number;
  images: string[];
  offer: number;
  versions: Version[];
  rating: number;
  reviewsCount: number;
  reviews: any[];
  createdAt: string;
  updatedAt: string;
  products: WishlistType[];
}

export interface Version {
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
  images: string[];
  _id: string;
}

interface ContextType {
  cartData: Root[];
  setCartData: React.Dispatch<React.SetStateAction<Root[]>>;
  loading: boolean;
  isWishlistData: WishlistType | null;
  setIsWisthlistData: React.Dispatch<React.SetStateAction<WishlistType | null>>;
  getCartDataApi: () => Promise<void>;
  getWisthListAi: () => Promise<void>;
  setIsOpenFlayCart: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenFlayCart: boolean;
}

export const CartStore = createContext<ContextType>({
  cartData: [],
  setCartData: () => {},
  loading: false,
  isWishlistData: null,
  setIsWisthlistData: () => {},
  getCartDataApi: async () => {},
  getWisthListAi: async () => {},
  setIsOpenFlayCart: () => {},
  isOpenFlayCart: false,
});

const CartContext = ({ children }: children) => {
  const [cartData, setCartData] = useState<Root[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isWishlistData, setIsWisthlistData] = useState<WishlistType | null>(
    null,
  );
  const [isOpenFlayCart, setIsOpenFlayCart] = useState<boolean>(false);
  const getCartDataApi = async () => {
    try {
      setLoading(true);
      const response = await axiosInstans(`cart`);
      setCartData(response.data.data.products);
    } catch (error) {
      // console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCartDataApi();
  }, []);

  const getWisthListAi = async () => {
    try {
      setLoading(true);
      const response = await axiosInstans("wishlist");
      setIsWisthlistData(response.data.data);
    } catch (error) {
      // console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getWisthListAi();
  }, []);

  return (
    <>
      <CartStore
        value={{
          cartData,
          setCartData,
          loading,
          isWishlistData,
          setIsWisthlistData,
          getCartDataApi,
          getWisthListAi,
          isOpenFlayCart,
          setIsOpenFlayCart,
        }}
      >
        {children}
      </CartStore>
    </>
  );
};

export default CartContext;
