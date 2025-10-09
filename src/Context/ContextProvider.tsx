"use client";
// import { GeneralHome } from "@/ServerAction/general/General";
// import { ArrivalsProduct } from "@/Types/arrivalsProductsType";
// import { Data } from "@/Types/dataType";
// import { Hero } from "@/Types/HeroType";
// import { newBarType } from "@/Types/newsbarType";
import React, { createContext, useEffect, useState } from "react";

interface children {
  children: React.ReactNode;
}

interface StoreContextType {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  // loading: boolean;
  // newsBar: string;
  // arrivalsProducts: ArrivalsProduct[];
}

export const StoreContext = createContext<StoreContextType>({
  setOpenMenu: () => {},
  openMenu: false,
  sortBy: "",
  setSortBy: () => {},
  // loading: true,
  // newsBar: "",ate(true);
  // const [newsBar, setNewBar] = useState<string>("");
  // const [arrivalsProducts, setArrivalsProducts] = useState<ArrivalsProduct[]>(
  //   []
  // );
  // arrivalsProducts: [],
});

const ContextProvider = ({ children }: children) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sortBy, setSortBy] = useState<string>("all");

  // const [loading, setLoading] = useSt

  // useEffect(() => {
  //   const generalHome = async () => {
  //     try {
  //       const respones: Data = await GeneralHome();
  //       setNewBar(respones.newsbar);
  //       setArrivalsProducts(respones.arrivalsProducts);
  //     } catch (error) {
  //       console.log("Error", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   generalHome();
  // }, []);

  return (
    <>
      <StoreContext.Provider
        value={{
          openMenu,
          setOpenMenu,
          sortBy,
          setSortBy,
        }}
      >
        {children}
      </StoreContext.Provider>
    </>
  );
};

export default ContextProvider;
