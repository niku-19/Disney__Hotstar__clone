import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Banner.module.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className={style.wrapper}>
        <div className={style.image__container}>
          <img src="/Images/slider-badag.jpg" alt="" />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.image__container}>
          <img src="/Images/slider-badging.jpg" alt="" />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.image__container}>
          <img src="/Images/slider-scale.jpg" alt="" />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.image__container}>
          <img src="/Images/slider-scales.jpg" alt="" />
        </div>
      </div>
    </Slider>
  );
};

export default BannerSlider;
