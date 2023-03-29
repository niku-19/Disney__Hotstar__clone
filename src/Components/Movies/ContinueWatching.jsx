import React from "react";
import style from "./Movies.module.css";

const ContinueWatching = () => {
  return (
    <>
      <div className={style.bigContainer}>
        <h1>Continue Watching</h1>
        <div className={style.grid__container}>
          <div className={style.wrapper__class}>
            <img src="/Images/ms.webp" alt="disney" />
          </div>
          <div className={style.wrapper__class}>
            <img src="/Images/ms.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContinueWatching;
