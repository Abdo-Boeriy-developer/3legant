import React from "react";
import style from "./simply.module.css";
const Simply = () => {
  return (
    <>
      <div className={style.simply}>
        <div className={`${style.simplyContainer}`}>
          <div className={style.text}>
            <h2>
              Simply Unique <span>/</span>
            </h2>
            <h2>
              Simply Better <span>.</span>
            </h2>
          </div>
          <div className={style.desc}>
            <p>
              <span>3legant</span>
              is a gift & descorations store based in HCMC, <br />
              Vietnam. Est since 2019
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simply;
