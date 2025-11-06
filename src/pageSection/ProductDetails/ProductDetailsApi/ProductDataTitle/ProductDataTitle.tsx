import React from "react";
import style from "./ProductDataTitle.module.css";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { BsPlus } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { DataProductType } from "@/Types/productDetailsType";
import AddCartAddWisthlistQuantity from "./AddCartAddWisthlistQuantity";

const ProductDataTitle = ({
  ProductDetailsData,
}: {
  ProductDetailsData: DataProductType;
}) => {
  const product = ProductDetailsData.data;
  console.log("ProductDetailsData", ProductDetailsData);

  const {
    category,
    description,
    offer,
    price,
    reviewsCount,
    stock,
    title,
    versions,
  } = product;

  return (
    <div className={style.ProductDataTitle}>
      <div className={style.ContainerTitle}>
        <div className={style.rev_desc_title_price}>
          <div className={style.review}>
            <div className={style.star}>
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <span>{reviewsCount} Reviews</span>
          </div>
          <h2 className={style.Title}>{title}</h2>
          <p className={style.desc}>{description}</p>
          <div className={style.price}>
            <h2>$ {price}</h2>
            <h3>$ {offer}</h3>
          </div>
        </div>
        <div className={style.offerExpiers}>
          <h2>Offer expires in:</h2>
          <div className={style.offerBox}>
            <div className={style.box}>
              <h2>2</h2>
              <span>Day</span>
            </div>
            <div className={style.box}>
              <h2>12</h2>
              <span>Hours</span>
            </div>
            <div className={style.box}>
              <h2>45</h2>
              <span>Minutes</span>
            </div>
            <div className={style.box}>
              <h2>05</h2>
              <span>Seconds</span>
            </div>
          </div>
        </div>
        <div className={style.chooseColor_Measurements}>
          <div className={style.Measurements}>
            <h2>Measurements</h2>
            <h3>17 1/2x20 5/8</h3>
          </div>
          <div className={style.chooseColor}>
            <h2 className={style.chooseTitle}>
              Choose Color <MdOutlineArrowForwardIos />
            </h2>
            <h2 className={style.color}>{versions[0].title}</h2>

            <div className={style.group_image}>
              {versions[0].images.map((item) => (
                <div className={`${style.image}`}>
                  <Image src={item} alt="" width={70} height={71} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <AddCartAddWisthlistQuantity ProductDetailsData={ProductDetailsData} />
        <div className={style.sku_Category}>
          <div className={style.sku}>
            <h2>SKU</h2>
            <h3>{stock}</h3>
          </div>
          <div className={style.catgory}>
            <h2>CATEGORY</h2>
            <h3>{category}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataTitle;
