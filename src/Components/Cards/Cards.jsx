import React from "react";
import style from "./Cards.module.css";

const Cards = () => {
  return (
    <>
      <div className={style.grid__container}>
        <div className={style.wrapper__class}>
          <img src="/Images/viewers-disney.png" alt="disney" />
          <video autoPlay={true} loop={true} playsInline={true} muted={true} >
            <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={style.wrapper__class}>
          <img src="/Images/viewers-marvel.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={style.wrapper__class}>
          <img src="/Images/viewers-national.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source
              src="/videos/1564676296-national-geographic.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={style.wrapper__class}>
          <img src="/Images/viewers-pixar.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={style.wrapper__class}>
          <img src="/Images/viewers-starwars.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true} muted={true}>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Cards;
