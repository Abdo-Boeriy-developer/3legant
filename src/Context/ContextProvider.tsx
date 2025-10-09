// "use client";
// import React, { createContext, useEffect, useState } from "react";

// interface children {
//   children: React.ReactNode;
// }

// interface StoreContextType {
//   setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
//   openMenu: boolean;
//   sortBy: string;
//   setSortBy: React.Dispatch<React.SetStateAction<string>>;
// }

// export const StoreContext = createContext<StoreContextType>({
//   setOpenMenu: () => {},
//   openMenu: false,
//   sortBy: "",
//   setSortBy: () => {},
// });

// const ContextProvider = ({ children }: children) => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [sortBy, setSortBy] = useState<string>("all");

//   return (
//     <>
//       <StoreContext.Provider
//         value={{
//           openMenu,
//           setOpenMenu,
//           sortBy,
//           setSortBy,
//         }}
//       >
//         {children}
//       </StoreContext.Provider>
//     </>
//   );
// };

// export default ContextProvider;

"use client";
import React, { createContext, useState, useEffect } from "react";
import { ArrivalsProduct } from "@/Types/arrivalsProductsType";

interface ChildrenProps {
  children: React.ReactNode;
}

interface StoreContextType {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  arrivalsProducts: ArrivalsProduct[];
  setArrivalsProducts: React.Dispatch<React.SetStateAction<ArrivalsProduct[]>>;
}

export const StoreContext = createContext<StoreContextType>({
  openMenu: false,
  setOpenMenu: () => {},
  sortBy: "all",
  setSortBy: () => {},
  arrivalsProducts: [],
  setArrivalsProducts: () => {},
});

const ContextProvider = ({ children }: ChildrenProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sortBy, setSortBy] = useState("all");
  const [arrivalsProducts, setArrivalsProducts] = useState<ArrivalsProduct[]>(
    []
  );

  // مثال بسيط لتجربة الـ context
  // useEffect(() => {
  //   // هنا ممكن بعدين تجيب الداتا من API
  //   // setArrivalsProducts(data);
  // }, []);

  return (
    <StoreContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        sortBy,
        setSortBy,
        arrivalsProducts,
        setArrivalsProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
