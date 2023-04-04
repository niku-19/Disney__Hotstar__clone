import React, { memo, useEffect } from "react";
import BannerSlider from "../Carousel/BannerSlider";
import Cards from "../Cards/Cards";
import ContinueWatching from "../Movies/ContinueWatching";
import Trending from "../Movies/Trending";
import Recommended from "../Movies/Recommended";
import NewDisney from "../Movies/NewDisney";
import Original from "../Movies/Original";
import style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../Features/MovieSlice";
import db from "../../firebase";

const Home = () => {
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  let Recommendeds = [];
  let ContinueWatchings = [];
  let Trendings = [];
  let NewDisneys = [];
  let Originals = [];

  useEffect(() => {
    db.collection("Movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().type === "recommend") {
          Recommendeds = [...Recommendeds, { id: doc.id, ...doc.data() }];
        }
        if (doc.data().type === "ContinueWatchings") {
          ContinueWatchings = [
            ...ContinueWatchings,
            { id: doc.id, ...doc.data() },
          ];
        }
        if (doc.data().type === "trending") {
          Trendings = [...Trendings, { id: doc.id, ...doc.data() }];
        }
        if (doc.data().type === "new") {
          NewDisneys = [...NewDisneys, { id: doc.id, ...doc.data() }];
        }
        if (doc.data().type === "original") {
          Originals = [...Originals, { id: doc.id, ...doc.data() }];
        }
      });
      dispatch(
        setMovies({
          Recommended: Recommendeds,
          ContinueWatching: ContinueWatchings,
          NewDisney: NewDisneys,
          Original: Originals,
          Trending: Trendings,
        })
      );
    });
  }, []);

  return (
    <>
      <div className={style.infinteScroolDiv}>
        <BannerSlider />
        <Cards />
        <ContinueWatching />
        <Trending />
        <Recommended />
        <NewDisney />
        <Original />
      </div>
    </>
  );
};

export default memo(Home);
