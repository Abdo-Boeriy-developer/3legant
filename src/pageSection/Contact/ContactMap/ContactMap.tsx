import React from "react";
import style from "./contactmap.module.css";
const ContactMap = () => {
  return (
    <div className={style.ContactMap}>
      <form className={style.form}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="emailAddress">Email Address</label>
          <input type="text" id="emailAddress" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" rows={3}></textarea>
        </div>
        <button type="button">Send Message</button>
      </form>
      <div className={style.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6974.8171850335875!2d31.13944954552001!3d29.064068742035317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a25e1064f72af%3A0xbacfa92a1eed60ea!2sBeni%20Suef%2C%20Qism%20Bani%20Sweif%2C%20Beni%20Suef%2C%20Beni%20Suef%20Governorate!5e0!3m2!1sen!2seg!4v1760963122842!5m2!1sen!2seg"
          width="400"
          height="400"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
