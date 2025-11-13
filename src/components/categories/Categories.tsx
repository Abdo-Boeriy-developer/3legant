"use client";
import React, { useEffect, useState } from "react";
import style from "./categories.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { categorieType } from "@/Types/categoriyType";
import LoaddingCategories from "./LoaddingCategories";
import Link from "next/link";
import Image from "next/image";

const Categories = () => {
  const [categoriy, setCategoriy] = useState<categorieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const GetCategories = async () => {
      try {
        const response = await fetch("/api/getCategories");
        const data = await response.json();
        setCategoriy(data.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    GetCategories();
  }, []);

  if (loading) return <LoaddingCategories />;

  return (
    <>
      <div className={style.categories}>
        <div className={` ${style.CategorieContainer}`}>
          <div className={style.largRoom}>
            <div className={style.largImage}>
              <Image src={categoriy[0]?.image} fill alt="" />
              <div className={style.living}>
                <h3>{categoriy[0]?.name}</h3>
                {/* <Link href={`${categoriy[0]._id}`}> */}
                <Link href="">
                  Shop Now
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
          <div className={style.SmRoom}>
            <div className={style.smImage}>
              <Image src={categoriy[1]?.image} fill alt="" />
              <div className={style.smLiving}>
                <h3>{categoriy[1]?.name}</h3>
                <Link href="">
                  Shop Now
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
            <div className={style.smImage}>
              <Image src={categoriy[2]?.image} fill alt="" />
              <div className={style.smLiving}>
                <h3>{categoriy[2]?.name}</h3>
                <Link href="">
                  Shop Now
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
