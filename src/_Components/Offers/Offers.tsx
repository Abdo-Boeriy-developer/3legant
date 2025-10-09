"use client";
import React, { useEffect, useState } from "react";
import style from "./offers.module.css";
import { LuTicketPercent } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import OffersLoading from "./OffersLoading";

const Offers = () => {
  const [closeOffer, setCloseOffer] = useState(true);
  const [newsBar, setNewsBar] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const newsBarNot = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getnewbar");
        const data = await response.json();
        setNewsBar(data.data.newsbar);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    newsBarNot();
  }, []);
  if (loading)
    return (
      <>
        <OffersLoading />
      </>
    );
  return (
    <>
      {closeOffer && (
        <div className={style.offer}>
          <div className={style.offerContainer}>
            <div className={style.noneMedia}></div>
            <div className={style.limited_Time}>
              <LuTicketPercent />
              {/* <h2>30 % off storeWide</h2> */}
              {/* <FaMinus /> */}
              {/* <h2>Limited time</h2> */}
              <h2>{newsBar}</h2>
              <Link href={""}>Shop Now</Link>
            </div>
            <div
              className={style.closeOffer}
              onClick={() => setCloseOffer(false)}
            >
              <RiCloseLine />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Offers;
