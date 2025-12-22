"use client";
import { addToCart } from "@/ServerAction/AddToCartWidthQuantity/AddToCartWidthQuantity";
import { ArrivalsProduct } from "@/Types/arrivalsProductsType";
import { useContext, useState } from "react";
import Cookies from "js-cookie";
import style from "./addtocartacton.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CartStore } from "@/Context/CartContext";

const AddToCartAction = ({ productId }: { productId: string }) => {
  const { getCartDataApi } = useContext(CartStore);
  const [loading, setLoading] = useState(false);
  const quantity: number = 1;
  const addtocart = async () => {
    try {
      setLoading(true);
      const response = await addToCart({ productId, quantity });
      if (response) {
        const data: ArrivalsProduct = await response.json();
        // console.log(data);
      } else {
        console.log("Response is undefined");
      }
    } catch (error) {
      console.log(error, "Error");
    } finally {
      setLoading(false);
    }
  };
  const route = useRouter();

  const handleAddCart = async () => {
    const token = Cookies.get("authorization");
    console.log("token", token);

    if (token) {
      await addtocart();
      await getCartDataApi();
    } else {
      toast.error(
        <>
          <div className="text-sm">
            Your need to sign in before adding and start shopping Wisth us!
            <button
              className="text-red-400 text-sm cursor-pointer text-center mt-2 pl-2"
              onClick={() => route.push("/login")}
            >
              SingUP
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <button
      type="button"
      onClick={handleAddCart}
      className={`${style.addToCartStyle}`}
    >
      {loading ? "Loading..." : "Add To Cart"}
    </button>
  );
};

export default AddToCartAction;
