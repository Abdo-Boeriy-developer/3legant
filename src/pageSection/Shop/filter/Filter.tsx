"use client";
import React, { useContext } from "react";
import style from "./filter.module.css";
import { TbVectorBezier2 } from "react-icons/tb";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { StoreContext } from "@/Context/ContextProvider";
const Filter = () => {
  const { sortBy, setSortBy } = useContext(StoreContext);

  return (
    <div className={style.filter}>
      <div className={style.text}>
        <div className={style.filterTop}>
          <h2>
            <TbVectorBezier2 />
          </h2>
          <h3>Filter</h3>
        </div>
        <div className={style.sort}>
          <h2
            onClick={() => setSortBy("tow")}
            className={sortBy === "tow" ? style.active : ""}
          >
            <CiGrid2V />
          </h2>
          <h2
            onClick={() => setSortBy("one")}
            className={sortBy === "one" ? style.active : ""}
          >
            <CiGrid2H />
          </h2>
        </div>
      </div>

      <div className={style.categoriesLink}>
        <h2>Categories</h2>
        <ul className={style.ul_Links}>
          <li>All Rooms</li>
          <li>All Rooms</li>
          <li>All Rooms</li>
          <li>All Rooms</li>
          <li>All Rooms</li>
          <li>All Rooms</li>
          <li>All Rooms</li>
          <li>All Rooms</li>
          <li>All Rooms</li>
          <li>All Rooms</li>
        </ul>
      </div>

      <div className={style.price}>
        <h2>price</h2>
        <ul>
          <li>
            <label htmlFor="allPrice">All Price</label>
            <input type="checkbox" id="allPrice" />
          </li>
          <li>
            <label htmlFor="">00.00 - 99.99</label>
            <input type="checkbox" id="" />
          </li>
          <li>
            <label htmlFor="">100.00 - 199.99</label>
            <input type="checkbox" />
          </li>
          <li>
            <label htmlFor="">200.00 - 299.99</label>
            <input type="checkbox" />
          </li>
          <li>
            <label htmlFor="">300.00 - 399.99</label>
            <input type="checkbox" />
          </li>
          <li>
            <label htmlFor="">400.00 +</label>
            <input type="checkbox" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
