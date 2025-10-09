import React from "react";
import { FiDelete, FiPlus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";
import { VscClose } from "react-icons/vsc";
import style from "./ProductBottomCart.module.css";
const ProductBottomCart = () => {
  return (
    <>
      <div className={style.productBottom}>
        <div className={style.iamgeProduct}>
          <div className={style.img}>
            <img src="/product2-removebg-preview.png" alt="" />
          </div>
          <div className={style.textImageProduct}>
            <h2>Try Table</h2>
            <p>Color : Black</p>
            <button className={style.remove}>
              <FiDelete />
              Remove
            </button>
            <div className={style.quantity}>
              <button>
                <TiMinus />
              </button>
              <h2>2</h2>

              <button>
                <FiPlus />
              </button>
            </div>
          </div>
        </div>
        <div className={style.price_quantity_total}>
          <div className={style.quantity}>
            <button>
              <TiMinus />
            </button>
            <h2>2</h2>

            <button>
              <FiPlus />
            </button>
          </div>
          <div className={style.price}>
            <h2>$190.00</h2>
          </div>
          <div className={style.total}>
            <h2>$390.00</h2>
            <div className={style.mediaRemove}>
              <VscClose />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBottomCart;
