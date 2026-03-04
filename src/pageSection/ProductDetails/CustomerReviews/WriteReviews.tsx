"use client";
import React, { useEffect, useState } from "react";
// style css
import style from "./WriteReviews.module.css";
// React Iocns
import { IoStar } from "react-icons/io5";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
// Image Optimazatins
import Image from "next/image";
// AxiosInstans
import { axiosInstans } from "@/utils/axios";

import toast from "react-hot-toast";
// Lottie Files
import Lottie from "lottie-react";
// import Lottie Files
import Message from "../../../../public/animation/Message.json";
type commentsType = {
  comment: string;
  createdAt: string;
  product: string;
  rating: number;
  updatedAt: string;
  _id: string;
  user: { avatar: string; email: string; fullName: string; _id: string };
};

type rateType = {
  rating: number;
  comment: string;
};

interface deletesReveiwType {
  _id: string;
}

const WriteReviews = ({ productid }: { productid: string }) => {
  // State Manments
  const [loadding, setLoadding] = useState<boolean>(false);
  const [loadingComments, setLoadingComments] = useState<boolean>(false);
  const [allReviews, setAllReviews] = useState<commentsType[]>([]);
  const [rate, setRate] = useState<rateType>({ rating: 0, comment: "" });
  const [editingReveiw, setEditingReveiw] = useState<commentsType | null>(null);
  const [currentUserId, setCurrentUserID] = useState<{
    _id: string;
  }>();

  // Get All Reviews
  useEffect(() => {
    const getAllReviews = async () => {
      try {
        setLoadingComments(true);
        const AllReviews = await axiosInstans(`review/${productid}`);
        // console.log("AllReviews", AllReviews.data.data);
        setAllReviews(AllReviews?.data?.data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoadingComments(false);
      }
    };
    if (productid) {
      getAllReviews();
    }
  }, [productid]);

  // Add Comments
  const AddComment = async () => {
    if (rate.rating === 0 && rate.comment === "") {
      toast.error("Plece Enter Your Comments & Reating!");
      return;
    }
    try {
      setLoadding(true);
      const respone = await axiosInstans.post(`review/${productid}`, {
        rating: rate.rating,
        comment: rate.comment,
      });
      const newComment = respone?.data?.data;
      setAllReviews((prev) => [newComment, ...prev]);
      setRate({ rating: 0, comment: "" });
      toast.success("Success Added Comments 🎉");
      // console.log("AddComments", respone);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadding(false);
    }
  };

  // Edit Comment & Rating
  const EditProducts = async (reviewId: string) => {
    try {
      setLoadding(true);
      const respone = await axiosInstans.put(`review/${reviewId}`, {
        rating: rate.rating,
        comment: rate.comment,
      });
      setRate({ rating: 0, comment: "" });
      const newUpdaeReview = respone?.data?.data;
      setAllReviews((prev) =>
        prev.map((review) =>
          review._id === reviewId ? { newUpdaeReview, ...review } : review,
        ),
      );
      setEditingReveiw(null);

      // console.log("Update Comments", respone.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoadding(false);
    }
  };

  const removeComment = async (reviewId: string) => {
    try {
      setLoadding(true);
      const respoes = await axiosInstans.delete(`review/${reviewId}`);
      const { deletesReveiw }: { deletesReveiw: deletesReveiwType } =
        respoes.data;
      console.log("deletesReveiw", deletesReveiw);
      setAllReviews((prev) => prev.filter((item) => item._id !== reviewId));
      // console.log("delteItme", respoes);
      toast.success("Removed Comments🎉");
    } catch (error: any) {
      console.log("error", error.data);
    } finally {
      setLoadding(false);
    }
  };

  useEffect(() => {
    // Get CurrentUserId of LocalStorage
    const currentUserId: any = JSON.parse(
      localStorage.getItem("currentUserId") || "{}",
    );
    setCurrentUserID(currentUserId);
    // Check User ID
  }, []);
  const checkUser = currentUserId?._id
    ? allReviews?.find((review) => review?.user?._id === currentUserId?._id)
    : null;

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
        <div className={style.Retings}>
          <div className={style.headingReview}>
            <h2>Customer Reviews</h2>
            <div className={style.stars}>
              <ul>
                {[...Array(5)].map((_, i) => (
                  <li key={i}>
                    <IoStar />
                  </li>
                ))}
              </ul>
              <p>11 Reviews</p>
            </div>
          </div>
          <div className={style.userReting}>
            {[...Array(rate.rating)].map((_, i) => (
              <span
                className={style.rateFill}
                onClick={() => setRate({ ...rate, rating: i + 1 })}
              >
                <BsFillStarFill />
              </span>
            ))}
            {[...Array(5 - rate.rating)].map((_, i) => (
              <span
                key={i}
                onClick={() =>
                  setRate({ ...rate, rating: rate.rating + i + 1 })
                }
              >
                <BsStar />
              </span>
            ))}
            {/* Code Advanced */}
            {/* {[...Array(5)].map((_, i) => (
              <span key={i} onClick={() => setRate({ ...rate, rating: i + 1 })}>
                {i < rate.rating ? (
                  <BsFillStarFill className={style.rateFill} />
                ) : (
                  <BsStar />
                )}
              </span>
            ))} */}
          </div>
        </div>

        <div className={style.input}>
          <input
            type="text"
            value={rate.comment}
            placeholder="Enter Your Commit..."
            onChange={(e) => setRate({ ...rate, comment: e.target.value })}
            disabled={!!checkUser && !editingReveiw}
          />
          <button
            type="button"
            onClick={() => {
              if (editingReveiw) {
                EditProducts(editingReveiw._id);
              } else {
                AddComment();
              }
            }}
            disabled={!!checkUser && !editingReveiw}
          >
            {loadding
              ? "Loadding..."
              : editingReveiw
                ? "Update Review "
                : "Write Review"}
          </button>
        </div>
      </div>
      <div className={style.review}>
        <h2> 11 Reviews</h2>
        <div className={style.selectOption}>
          <p>Newsete</p>
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>
        </div>
      </div>

      {loadingComments ? (
        <div className={style.loaddingComments}>
          <Lottie animationData={Message} className={style.lottie} />
        </div>
      ) : (
        allReviews &&
        allReviews?.map((review) => (
          <div className={style.comment} key={review._id}>
            <div className={style.imageUser}>
              {review?.user?.avatar && (
                <Image
                  src={review?.user?.avatar}
                  alt="Image User"
                  width={50}
                  height={50}
                />
              )}
            </div>
            <div className={style.commentUser}>
              {/* Edit Comment */}
              <div className={style.editComment}>
                <div className={style.UserNameRetings}>
                  <div>
                    <h3>{review?.user?.fullName}</h3>
                    <div className={style.stars}>
                      <ul>
                        {[...Array(review.rating)].map((_, i) => (
                          <li key={i}>
                            <IoStar />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {currentUserId && review.user._id === currentUserId._id && (
                    <div className={style.Edit}>
                      <FaRegEdit
                        onClick={() => {
                          setRate({
                            rating: review.rating,
                            comment: review.comment,
                          });
                          setEditingReveiw(review);
                        }}
                      />
                      {loadding ? (
                        <span className={style.LoadingTrash}>
                          <AiOutlineLoading3Quarters />
                        </span>
                      ) : (
                        <FaRegTrashCan
                          onClick={() => removeComment(review?._id)}
                        />
                      )}
                      {/* <FaRegTrashCan
                        onClick={() => removeComment(review?._id)}
                      /> */}
                      {/* <span className={style.LoadingTrash}>
                        <AiOutlineLoading3Quarters />
                      </span> */}
                    </div>
                  )}
                </div>
              </div>
              <p>{review?.comment}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WriteReviews;
