import React from "react";
import style from "./Login.module.css";
const Login = () => {
  return (
    <section className={style.big__container}>
      <div className="container">
        <div className={style.brand__image}>
          <img src="/Images/cta-logo-one.svg" alt="sponserImage" />
        </div>
        <div className={style.loginButton}>
          <a>GET ALL THERE</a>
          <p>
            Get Premier Access to Raya and the last Dragon for an additional fee
            with a Disney+ subscription. As of 13/05/2023, the price of Disney+
            and The Disney Bundle will increase by ₹ 399 /-
          </p>
        </div>
        <div className={style.brand__image2}>
          <img src="/Images/cta-logo-two.png" alt="sponserImage-2" />
        </div>
      </div>
    </section>
  );
};

export default Login;
