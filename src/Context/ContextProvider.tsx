"use client";
import React, { createContext, useEffect, useState } from "react";

interface children {
  children: React.ReactNode;
}

interface StoreContextType {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

export const StoreContext = createContext<StoreContextType>({
  setOpenMenu: () => {},
  openMenu: false,
  sortBy: "",
  setSortBy: () => {},
});

const ContextProvider = ({ children }: children) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sortBy, setSortBy] = useState<string>("all");

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
