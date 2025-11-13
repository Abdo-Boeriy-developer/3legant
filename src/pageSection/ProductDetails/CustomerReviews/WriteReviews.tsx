import React from "react";
import style from "./WriteReviews.module.css";
import { IoStar } from "react-icons/io5";
import { GoStar } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
const WriteReviews = () => {
  return (
    <div className={style.WriteReviews}>
      <div className={style.linkReview}>
        <ul>
          <li>Additional info </li>
          <li>Questions</li>
          <li className={style.active}>Reviews</li>
        </ul>
      </div>
      <div className={style.textReview}>
        <h2>Customer Reviews</h2>
        <div className={style.stars}>
          <ul>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <IoStar />
            </li>
            <li>
              <GoStar />
            </li>
          </ul>
          <p>11 Reviews</p>
        </div>
        <div className={style.input}>
          <input type="text" placeholder="Enter Your Commit..." />
          <button>Write Review</button>
        </div>
      </div>
      <div className={style.review}>
        <h2>11 Reviews</h2>
        <div className={style.selectOption}>
          <p>Newsete</p>
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>
      <div className={style.comment}>
        <div className={style.imageUser}>
          <Image
            src={"/imageUser.png"}
            alt="Image User"
            width={50}
            height={50}
          />
        </div>
        <div className={style.commentUser}>
          <h3>Sofia Harvetz</h3>
          <div className={style.stars}>
            <ul>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
            </ul>
          </div>
          <p>
            I bought it 3 weeks ago and now come back just to say “Awesome
            Product”. I really enjoy it. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupt et quas molestias excepturi sint non provident.
          </p>
        </div>
      </div>
      <div className={style.comment}>
        <div className={style.imageUser}>
          <Image
            src={"/imageUser.png"}
            alt="Image User"
            width={50}
            height={50}
          />
        </div>
        <div className={style.commentUser}>
          <h3>Sofia Harvetz</h3>
          <div className={style.stars}>
            <ul>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
            </ul>
          </div>
          <p>
            I bought it 3 weeks ago and now come back just to say “Awesome
            Product”. I really enjoy it. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupt et quas molestias excepturi sint non provident.
          </p>
        </div>
      </div>
      <div className={style.comment}>
        <div className={style.imageUser}>
          <Image
            src={"/imageUser.png"}
            alt="Image User"
            width={50}
            height={50}
          />
        </div>
        <div className={style.commentUser}>
          <h3>Sofia Harvetz</h3>
          <div className={style.stars}>
            <ul>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
            </ul>
          </div>
          <p>
            I bought it 3 weeks ago and now come back just to say “Awesome
            Product”. I really enjoy it. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupt et quas molestias excepturi sint non provident.
          </p>
        </div>
      </div>
      <div className={style.comment}>
        <div className={style.imageUser}>
          <Image
            src={"/imageUser.png"}
            alt="Image User"
            width={50}
            height={50}
          />
        </div>
        <div className={style.commentUser}>
          <h3>Sofia Harvetz</h3>
          <div className={style.stars}>
            <ul>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
            </ul>
          </div>
          <p>
            I bought it 3 weeks ago and now come back just to say “Awesome
            Product”. I really enjoy it. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupt et quas molestias excepturi sint non provident.
          </p>
        </div>
      </div>
      <div className={style.comment}>
        <div className={style.imageUser}>
          <Image
            src={"/imageUser.png"}
            alt="Image User"
            width={50}
            height={50}
          />
        </div>
        <div className={style.commentUser}>
          <h3>Sofia Harvetz</h3>
          <div className={style.stars}>
            <ul>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
              <li>
                <IoStar />
              </li>
            </ul>
          </div>
          <p>
            I bought it 3 weeks ago and now come back just to say “Awesome
            Product”. I really enjoy it. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupt et quas molestias excepturi sint non provident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WriteReviews;
