import React from "react";
import style from "./Movies.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Recommended = () => {
  const movies = useSelector((state) => state.movie.Recommended);
  return (
    <>
      <div className={style.bigContainer}>
        <h1>Recommended for You</h1>
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
            <img src="/Images/ms.webp" alt="disney" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
