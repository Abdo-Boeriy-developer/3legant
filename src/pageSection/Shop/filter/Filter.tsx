"use client";
import React, { useContext, useEffect, useState } from "react";
import style from "./filter.module.css";
import { TbVectorBezier2 } from "react-icons/tb";
import { CiGrid2V } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import { StoreContext } from "@/Context/ContextProvider";
import axios from "axios";

interface CategoryType {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

const Filter = () => {
  const {
    sortBy,
    setSortBy,
    selectedPriceRange,
    setSelectedPriceRange,
    selectedCategory,
    setSelectedCategory,
  } = useContext(StoreContext);

  const [categoiry, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await axios.get(
          "https://3legent-backend.vercel.app/api/v1/categories"
        );
        if (Array.isArray(data?.data?.data?.categories)) {
          setCategories(data?.data?.data?.categories);
        }
      } catch (error) {
        console.error(" Error fetching categories:", error);
      }
    };
    getCategories();
  }, []);
  interface PriceRangeType {
    label: string;
    min: number | null;
    max: number | null;
    id: string;
  }
  const priceRanges: PriceRangeType[] = [
    { label: "All Price", min: null, max: null, id: "allPrice" },
    { label: "0.00 - 99.99", min: 0, max: 99.99, id: "range1" },
    { label: "100.00 - 199.99", min: 100, max: 199.99, id: "range2" },
    { label: "200.00 - 299.99", min: 200, max: 299.99, id: "range3" },
    { label: "300.00 - 399.99", min: 300, max: 399.99, id: "range4" },
    { label: "400.00+", min: 400, max: null, id: "range5" },
  ];

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
          <li
            className={selectedCategory === null ? style.active : ""}
            onClick={() => setSelectedCategory(null)}
          >
            All Rooms
          </li>
          {categoiry?.map((cat) => (
            <li
              key={cat._id}
              onClick={() => setSelectedCategory(cat.name)}
              className={cat.name === selectedCategory ? style.active : ""}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

      <div className={style.price}>
        <h2>price</h2>
        <ul>
          {priceRanges.map((item) => (
            <li key={item.label}>
              <label htmlFor={item.id}>{item.label}</label>
              <input
                id={item.id}
                type="radio"
                checked={selectedPriceRange.id === item.id}
                onChange={() => setSelectedPriceRange(item)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className={style.rangePrice}>
        <input type="range" step={20} min={0} max={800} defaultValue={0} />
        <input type="range" step={20} min={0} max={800} defaultValue={800} />
      </div>
    </div>
  );
};

export default Filter;
