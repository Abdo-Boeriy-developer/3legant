"use client";
import React, { useEffect, useState } from "react";
import style from "./ProductDataImage.module.css";
import Image from "next/image";
import { DataProductType } from "@/Types/productDetailsType";
const ProductDataImage = ({
  ProductDetailsData,
}: {
  ProductDetailsData: DataProductType;
}) => {
  const [dataImage, setDataImage] = useState<string>("");
  const { images, thumbnail } = ProductDetailsData;

  useEffect(() => {
    if (images && images.length > 0) {
      setDataImage(images[0]);
    } else {
      setDataImage(thumbnail);
    }
  }, [images, thumbnail]);

  return (
    <>
      <div className={style.largImage}>
        <Image src={dataImage} alt="" width={500} height={0} />
        <div className={style.new}>
          <h2>NEW</h2>
          <h3>-50%</h3>
        </div>
      </div>
      <div className={style.smImage}>
        {images.map((img, index) => {
          return (
            <div key={index} className={style.box}>
              <Image
                src={img}
                alt=""
                width={200}
                height={100}
                onClick={() => setDataImage(img)}
              />
            </div>
          );
        })}
        {/*  */}
      </div>
    </>
  );
};

export default ProductDataImage;
