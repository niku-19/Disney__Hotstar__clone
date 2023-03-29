import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Movies.module.css";

const Trending = () => {
  const movies = useSelector((state) => state.movie.Trending);
  return (
    <>
      <div className={style.bigContainer}>
        <h1>Latest & Trending</h1>
        <div className={style.grid__container}>
          {movies.map((eachMovie) => {
            return (
              <div key={eachMovie.id} className={style.wrapper__class}>
                <Link to={"/details/" + eachMovie.id}>
                  <img src={eachMovie.cardImg} alt="disney" />
                </Link>
              </div>
            );
          })}
          <div className={style.wrapper__class}>
            <img src="/Images/ms.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
