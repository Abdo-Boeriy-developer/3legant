"use client";
import React, { useEffect, useState } from "react";
import style from "./InternetStutes.module.css";
const InternetStutes = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <>
      {!isOnline ? (
        <div className={style.InternetStutes}>
          <h2>No internet connection, Pleace reconnect.</h2>
        </div>
      ) : null}
    </>
  );
};

export default InternetStutes;
