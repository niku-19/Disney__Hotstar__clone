import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./Movies.module.css";

const NewDisney = () => {
  const movies = useSelector((state) => state.movie.NewDisney);
  return (
    <>
      <div className={style.bigContainer}>
        <h1>New on Disney+ Hotstar</h1>
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

export default NewDisney;
