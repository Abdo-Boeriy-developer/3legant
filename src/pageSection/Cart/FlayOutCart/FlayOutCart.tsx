"use client";
import React, { useContext, useEffect } from "react";
import style from "./FlayOutCart.module.css";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Link from "next/link";
import { CartStore } from "@/Context/CartContext";
import { usePathname } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
const FlayOutCart = () => {
  const { isOpenFlayCart, setIsOpenFlayCart, cartData, getCartDataApi } =
    useContext(CartStore);
  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const pathName = usePathname();
  useEffect(() => {
    setIsOpenFlayCart(false);
  }, [pathName]);

  const removeItem = async (productId: string) => {
    const token = Cookies.get("authorization");
    try {
      const response = await axios.delete(
        `https://3legent-backend.vercel.app/api/v1/cart`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: { productId },
        }
      );
      // console.log("respone", response.data.message);
      if (response.data.status === "success") {
        toast.success(response.data.message);
        await getCartDataApi();
      }
    } catch (error: any) {
      toast.error(error.response.message);
    }
  };

  return (
    <>
      <div
        className={`${style.flayout} ${isOpenFlayCart ? style.active : ""} `}
      >
        <div className={style.flayContainer}>
          <div className={style.products}>
            <div className={style.close}>
              <h2 className={style.title}>Cart</h2>
              <IoCloseOutline onClick={() => setIsOpenFlayCart(false)} />
            </div>
            <div className={style.items}>
              {cartData.length > 0 ? (
                cartData.map((item) => (
                  <div className={style.item}>
                    <div className={style.images}>
                      <div className={style.img}>
                        <Image
                          src={item.product.images[0]}
                          alt="item"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className={style.itemTitle}>
                        <h3>{item.product.title}</h3>
                        <p>Color : {item.product.versions[0].title}</p>
                        <div className={style.quantity}>
                          <button>
                            <FiMinus />
                          </button>
                          <h2>1</h2>
                          <button>
                            <GoPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={style.removeItem}>
                      <h3>{item.product.price}</h3>
                      <IoCloseOutline
                        onClick={() => removeItem(item.product._id)}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className={style.noProducts}>
                  <Image
                    src={"/empty_box.webp"}
                    alt=""
                    width={150}
                    height={150}
                  />
                  <h1>There are no product on the cart 😢</h1>
                </div>
              )}
            </div>
          </div>
          <div className={style.checkout}>
            <ul className={style.subtotal}>
              <li>
                <h2>SubTotal</h2>
                <h3>$ {totalPrice}</h3>
              </li>
              <li>
                <h2 className={style.total}>Total</h2>
                <h3 className={style.price}>$ {totalPrice}</h3>
              </li>
            </ul>
            <div className={style.buttons}>
              <button className={style.buttonCheckout}>Checkout</button>
              <Link href={"/cart"}>View Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlayOutCart;
