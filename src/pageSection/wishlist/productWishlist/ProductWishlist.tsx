"use client";
import { useContext } from "react";
import style from "./productWishlist.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { CartStore } from "@/Context/CartContext";
import AddToCartAction from "@/Services/AdddtocartActon/AddToCartAction";
import LoadingWishtList from "./LoadingWishtList";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { RiShoppingCart2Line } from "react-icons/ri";
import Image from "next/image";
const ProductWishlist = () => {
  const {
    isWishlistData,
    loading,
    setIsWisthlistData,
    getWisthListAi,
    cartData,
  } = useContext(CartStore);

  const deleteItemWisthList = async (productId: string) => {
    const token = Cookies.get("authorization");

    try {
      const response = await axios.delete(
        `https://3legent-backend.vercel.app/api/v1/wishlist`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: { productId },
        }
      );
      setIsWisthlistData(response.data.data);
      if (response.data.status === "success") {
        toast.success("Item deleted from wishlist successfully");
        await getWisthListAi;
      }
    } catch (error) {
      console.error(" Error ", error);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingWishtList />
      ) : isWishlistData.length > 0 ? (
        isWishlistData.map((item) => {
          const inIsCart = cartData.some((p) => p.product._id === item._id);

          return (
            <>
              <div className={style.ProductWishlist}>
                <div className={style.topTextWishtlist}>
                  <h2>Your Wishlist</h2>
                </div>
                <div className={style.product_price_acton}>
                  <ul>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Action</li>
                  </ul>
                </div>
                <div className={style.products}>
                  <div className={style.iamge_title_remove}>
                    <div
                      className={style.remove}
                      onClick={() => deleteItemWisthList(item._id)}
                    >
                      <IoCloseOutline />
                    </div>
                    <div className={style.image_title}>
                      <div className={style.imageProduct}>
                        <Image
                          src={item.images[0]}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className={style.title}>
                        <h2>{item.title}</h2>
                        <p>Color: {item.versions[0].title}</p>
                        <p className={style._price}>$ ${item.price}</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.price_addtocart}>
                    <div className={style.price}>
                      <h2>$ {item.price}</h2>
                    </div>
                    <div className={style.addToCart}>
                      {inIsCart ? (
                        <RiShoppingCart2Line className="text-2xl cursor-pointer" />
                      ) : (
                        <AddToCartAction productId={item._id} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <>
          <div className={style.empty}>
            <Image src="/empty_box.webp" alt="" width={250} height={200} />
            <h2>🕸️ Your wishlist is empty.</h2>
          </div>
        </>
      )}
    </>
  );
};

export default ProductWishlist;
