"use client";
import React, { useContext } from "react";
import style from "./ProductDataTitle.module.css";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { BsPlus } from "react-icons/bs";
import { CartStore } from "@/Context/CartContext";
import AddToCartAction from "@/Services/AdddtocartActon/AddToCartAction";
import { DataProductType } from "@/Types/productDetailsType";
import { FaHeart } from "react-icons/fa";
import AddToWishlist from "@/Services/AddToWishlist/AddToWishlist";
const AddCartAddWisthlistQuantity = ({
  ProductDetailsData,
}: {
  ProductDetailsData: DataProductType;
}) => {
  const { isWishlistData, getWisthListAi, cartData } = useContext(CartStore);
  const product = ProductDetailsData.data;
  const { _id } = product;

  const isInWisthList = isWishlistData.some((p) => p._id === _id);

  const handleAddWisthLIst = async (productId: string) => {
    await AddToWishlist(productId);
    await getWisthListAi();
  };

  return (
    <div className={style.WisthList_Cart_Quantity}>
      <div className={style.quantity_wisthLIst}>
        <div className={style.quantity}>
          <HiMiniMinusSmall />
          <h2>1</h2>
          <BsPlus />
        </div>
        {isInWisthList ? (
          <div
            className={`${isInWisthList ? style.noDrop : ""}
            ${style.wisthList} 
            `}
          >
            {isInWisthList ? (
              <FaHeart className={style.addWisListe} />
            ) : (
              <CiHeart />
            )}
            Added
          </div>
        ) : (
          <div
            className={style.wisthList}
            onClick={() => handleAddWisthLIst(_id)}
          >
            <CiHeart />
            WisthList
          </div>
        )}
      </div>
      <div className={style.Cart}>
        <AddToCartAction productId={_id} />
      </div>
    </div>
  );
};

export default AddCartAddWisthlistQuantity;
