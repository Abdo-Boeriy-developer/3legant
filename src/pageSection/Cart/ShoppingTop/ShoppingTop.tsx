"use client";
import React from "react";
import style from "./ShoppingTop.module.css";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { usePathname } from "next/navigation";

interface ShoppingTopProps {
  text: string;
}

const ShoppingTop: React.FC<ShoppingTopProps> = ({ text }) => {
  const params = usePathname();

  return (
    <div className={style.shoppingCart}>
      <Link href={"/cart"} className={style.mediaBack}>
        <MdKeyboardArrowLeft /> Back
      </Link>
      <div className={`container ${style.shoppingCartContainer}`}>
        <h1 className={style.title}>{text}</h1>

        <div className={style.cart_box}>
          <div className={style.links}>
            <Link
              className={`
                
                ${params === "/cart" ? style.addLink : ""}
                ${params === "/cart" ? style.active : ""}`}
              href={"/cart"}
            >
              <span>1</span>Shopping Cart
            </Link>
            <Link
              className={`
                ${params === "/checkout" ? style.addLink : ""}
                ${params === "/checkout" ? style.active : ""}`}
              href={"/checkout"}
            >
              <span>2</span>Checkout Details
            </Link>
            <Link
              className={`
                ${params === "/orderComplete" ? style.addLink : ""}
                ${params === "/orderComplete" ? style.active : ""}`}
              href={"/orderComplete"}
            >
              <span>3</span>Order complete
            </Link>
          </div>
          <Link
            className={`${style.linkShop} ${
              params === "/checkout" ? style.active : ""
            }`}
            href={`${
              params === "/cart"
                ? "/checkout"
                : params === "/checkout"
                ? "/orderComplete"
                : params === "/orderComplete"
                ? "/shop"
                : ""
            }`}
          >
            {params === "/cart"
              ? 2
              : params === "/checkout"
              ? 3
              : params === "/orderComplete"
              ? 0
              : ""}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingTop;
