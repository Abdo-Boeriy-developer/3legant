"use client";
import React, { useEffect, useState } from "react";
import style from "./ProductData.module.css";
import ProductDataTitle from "../ProductDataTitle/ProductDataTitle";
import { DataProductType } from "@/Types/productDetailsType";
import ProductDataImage from "../ProductDataImage/ProductDataImage";
import axios from "axios";
import LoadingProductDetails from "../../LoadingProductDetails/LoadingProductDetails";

const ProductData = ({ productid }: { productid: string }) => {
  const [ProductDetailsData, setProductDetailsData] =
    useState<DataProductType | null>(null);
  const [loading, setLoding] = useState(false);
  const getProductDetailsApi = async () => {
    try {
      setLoding(true);
      const respone = await axios.get(
        `https://3legent-backend.vercel.app/api/v1/products/${productid}`
      );

      // console.log("respone", respone.data);
      setProductDetailsData(respone.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    getProductDetailsApi();
    // console.log("ProductDetailsData", ProductDetailsData);
  }, []);

  if (!ProductDetailsData) {
    return <LoadingProductDetails />;
  }
  return (
    <div className={style.productData}>
      <div className={style.dataContainer}>
        {loading ? (
          <LoadingProductDetails />
        ) : (
          <>
            <div className={style.images}>
              <ProductDataImage ProductDetailsData={ProductDetailsData} />
            </div>
            <div className={style.title}>
              <ProductDataTitle ProductDetailsData={ProductDetailsData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductData;
