"use client";
import React, { useEffect, useMemo, useState } from "react";
import style from "./offers.module.css";
import { LuTicketPercent } from "react-icons/lu";
import { RiCloseLine } from "react-icons/ri";
import OffersLoading from "./LoadingOffer/OffersLoading";
import { usePathname } from "next/navigation";

const Offers = () => {
  const [closeOffer, setCloseOffer] = useState(true);
  const [newsBar, setNewsBar] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const pathName = usePathname();

  useMemo(() => {
    if (
      pathName === "/signup" ||
      pathName === "/login" ||
      pathName === "/myAccount" ||
      pathName === "/orders" ||
      pathName === "/logout" ||
      pathName === "/address" ||
      pathName === "/cart" ||
      pathName === "/checkout" ||
      pathName === "/orderComplete" ||
      pathName === "/wishlist" ||
      pathName === "/forgotpasswrod" ||
      pathName === "/verifyPasswrodOtp" ||
      pathName === "/resetPasswrod"
    ) {
      setCloseOffer(false);
      return;
    } else {
      setCloseOffer(true);
    }
  }, [pathName]);

  useEffect(() => {
    const newsBarNot = async () => {
      try {
        const response = await fetch("/api/getNewbar");
        const data = await response.json();
        setNewsBar(data.data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    newsBarNot();
  }, []);

  if (!closeOffer) return null;

  if (loading)
    return (
      <>
        <OffersLoading />
      </>
    );

  return (
    <>
      {closeOffer ? (
        <div className={style.offer}>
          <div className={style.offerContainer}>
            <div className={style.noneMedia}></div>
            <div className={style.limited_Time}>
              <LuTicketPercent />
              <h2>{newsBar}</h2>
            </div>
            <div
              className={style.closeOffer}
              onClick={() => setCloseOffer(false)}
            >
              <RiCloseLine />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Offers;
