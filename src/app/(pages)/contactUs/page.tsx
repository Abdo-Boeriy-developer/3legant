import React from "react";
import style from "./contact.module.css";
import Image from "next/image";
import ContactBox from "@/pageSection/Contact/ContactBox/Contact";
import ContactMap from "@/pageSection/Contact/ContactMap/ContactMap";
import Properity from "@/pageSection/Contact/Properity/Properity";
const ContactUs = () => {
  return (
    <>
      <div className={`container ${style.ContactUs}`}>
        <div className={style.text_top}>
          <h1>
            We believe in sustainable decor. We're passionate about life at home
          </h1>
          <p>
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>
        <div className={style.containerContact}>
          <div className={style.imagesSection}>
            <Image
              src={"/contactus.jpg"}
              alt="contactUs"
              width={500}
              height={100}
            />
          </div>
          <div className={style.textSection}>
            <h2>About Us</h2>
            <p>
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019. Our customer service is always prepared to support you
              24/7
            </p>
          </div>
        </div>
        <ContactBox />
        <ContactMap />
      </div>
      <Properity />
    </>
  );
};

export default ContactUs;
