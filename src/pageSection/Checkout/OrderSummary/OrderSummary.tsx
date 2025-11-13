import React from "react";
import style from "./orderSummary.module.css";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { LuTicketPercent } from "react-icons/lu";
import Image from "next/image";
const OrderSummary = () => {
  return (
    <div className={style.orderSummary}>
      <div className={style.orderContainer}>
        <h2>Order Summary</h2>

        <div className={style.orderProduct}>
          <div className={style.image_title}>
            <div className={style.productImage}>
              <Image
                src="/product2-removebg-preview.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <div className={style.title_quantity}>
              <h3>Tray Table</h3>
              <p>color:Black</p>
              <div className={style.quantity}>
                <button>
                  <FiMinus />
                </button>
                <h4>1</h4>
                <button>
                  <FiPlus />
                </button>
              </div>
            </div>
          </div>
          <div className={style.price_remove}>
            <h2>$190.00</h2>
            <h3>
              <IoCloseOutline />
            </h3>
          </div>
        </div>
        <div className={style.orderProduct}>
          <div className={style.image_title}>
            <div className={style.productImage}>
              <Image
                src="/product2-removebg-preview.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className={style.title_quantity}>
              <h3>Tray Table</h3>
              <p>color:Black</p>
              <div className={style.quantity}>
                <button>
                  <FiMinus />
                </button>
                <h4>1</h4>
                <button>
                  <FiPlus />
                </button>
              </div>
            </div>
          </div>
          <div className={style.price_remove}>
            <h2>$190.00</h2>
            <h3>
              <IoCloseOutline />
            </h3>
          </div>
        </div>
        <div className={style.input}>
          <input type="text" placeholder="Input" />
          <button>Apply</button>
        </div>
        <div className={style.total}>
          <ul>
            <li>
              <h2>
                <span>
                  <LuTicketPercent />
                </span>{" "}
                jenkateMW
              </h2>
              <h4>-$25.00 [Remove]</h4>
            </li>
            <li>
              <h2>Shipping</h2>
              <h3>Free</h3>
            </li>
            <li>
              <h2>Subtotal</h2>
              <h3>$25.00 </h3>
            </li>
            <li>
              <h1>Total</h1>
              <h1>$25.00</h1>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.placeOrder}>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default OrderSummary;
