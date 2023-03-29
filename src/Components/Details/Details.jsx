import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import style from "./Details.module.css";

const Detail = (props) => {
  const { id } = useParams();
  console.log("🚀 ~ file: Details.jsx:8 ~ Detail ~ id:", id);
  const [detailData, setDetailData] = useState({});
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    db.collection("Movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  const handlePlay = (e) => {
    e.preventDefault();
    setPlayVideo((prev) => !prev);
  };
  return (
    <div className={style.container}>
      {playVideo ? (
        <>
          <div className={style.video__container}>
            <iframe
            width="100%"
              height="777px"
              src={`https://www.youtube.com/embed/${detailData.video}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <div className={style.Background}>
            <img alt={detailData.title} src={detailData.backgroundImg} />
          </div>

          <div className={style.ImageTitle}>
            <img alt={detailData.title} src={detailData.titleImg} />
          </div>
        </>
      )}

      <div className={style.inside__container}>
        <div className={style.controls}>
          <button onClick={handlePlay}>
            <img src="/Images/play-icon-black.png" alt="" />
            <span>{playVideo ? "stop" : "play"}</span>
          </button>
          <div className={style.addList}>
            <span />
            <span />
          </div>
          <div className={style.GroupWatch}>
            <div>
              <img src="/Images/group-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className={style.SubTitle}>{detailData.subTitle}</div>
        <div className={style.Description}>{detailData.description}</div>
      </div>
    </div>
  );
};

export default Detail;
