import style from "./cart.module.css";
import ShoppingTop from "@/pageSection/Cart/ShoppingTop/ShoppingTop";

import TextTopProductCart from "@/pageSection/Cart/TextTopProductCart/TextTopProductCart";
import ProductBottomCart from "@/pageSection/Cart/ProductBottomCart/ProductBottomCart";
import Coupon from "@/pageSection/Cart/Coupon/Coupon";
import CartSummary from "@/pageSection/Cart/CartSummary/CartSummary";
import ClearCart from "@/pageSection/Cart/ClearCart/ClearCart";
const page = () => {
  return (
    <>
      <div className={style.cart}>
        <ShoppingTop text={"Cart"} />
        <div className={`container ${style.cartContainer}`}>
          <div className={style.products}>
            {/* TextProduct title price  subtitle */}
            <TextTopProductCart />

            {/* product bottom  */}
            <ProductBottomCart />
            <ClearCart />
            {/* Coupon */}
            <Coupon />
          </div>
          {/* cart summary */}
          <CartSummary />
        </div>
      </div>
    </>
  );
};

export default page;
