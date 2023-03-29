import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Features/userSlices";
import style from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        navigate("/home", { replace: true });
        dispatch(
          login({
            name: userAuth.displayName,
            email: userAuth.email,
            photo: userAuth.photoURL,
          })
        );
      }
    });
  }, [user]);
  const handleAuth = () => {
    console.log("clicked");
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.displayName);
        dispatch(
          login({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <header>
      <nav>
        <div className={style.left__side__nav}>
          <div className={style.logo}>
            <Link to="/home">
              <img src="/Images/logo.svg" alt="brand__logo" /> <span>hotstar</span>
            </Link>
          </div>
          {user.isVerfied ? (
            <>
              <div className={style.nav__menu}>
                <ul>
                  <li>TV</li>
                  <li>Movie</li>
                  <li>Sports</li>
                  <li>Disney+</li>
                  <li>
                    <span id={style.kids}>KiDS</span>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        {!user.isVerfied ? (
          <div className={style.login}>
            <a onClick={handleAuth}>Login</a>
          </div>
        ) : (
          <div className={style.loogedIn}>
            <img src={user.photo} alt="user__photo" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
