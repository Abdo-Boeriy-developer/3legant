"use client";
import HeroShop from "@/pageSection/Shop/heroShop/HeroShop";
import { axiosInstans } from "@/utils/axios";
import React, { useEffect, useState } from "react";
import style from "./blog.module.css";
import Image from "next/image";
// react icons
import { FaArrowRight } from "react-icons/fa6";
interface blogDataType {
  _id: string;
  title: string;
  thumbnail: string;
  content: string;
  author: string;
  tags: [string];
}

const page = () => {
  const [allBlogs, setAllBlogs] = useState<blogDataType[]>([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const respone = await axiosInstans("blogs");
      console.log("respone", respone.data);
      setAllBlogs(respone.data.data);
    };
    getAllBlogs();
  }, []);
  return (
    <div className="container">
      <HeroShop
        Paragraph="Home ideas and design inspiration"
        route="/blog"
        shop="Blog"
        pageTitle="Our Blog"
      />
      <div className={style.blogContainer}>
        <div className={style.backGround}></div>
        <div className={style.blogBox}>
          {allBlogs?.map((item) => (
            <div className={style.box} key={item._id}>
              {item.thumbnail && (
                <Image
                  src={item.thumbnail}
                  width={100}
                  height={100}
                  alt={item.title}
                />
              )}
              <h2>{item.title}</h2>
              <a href="#">
                Read Article
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
