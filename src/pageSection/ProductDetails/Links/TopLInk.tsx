import React from "react";
import style from "./TopLInk.module.css";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
const TopLInk = () => {
  return (
    <div className={`container`}>
      <div className={style.containerLink}>
        <Link href={"/"}>
          Home <MdKeyboardArrowRight />
        </Link>
        <Link href={"/shop"}>
          Shop <MdKeyboardArrowRight />
        </Link>
        <Link href={"#"}>
          Living Room <MdKeyboardArrowRight />
        </Link>
        <Link href={""}>Product</Link>
      </div>
    </div>
  );
};

export default TopLInk;
