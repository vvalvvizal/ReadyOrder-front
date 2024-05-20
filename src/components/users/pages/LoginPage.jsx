import React from "react";
import styles from "./LoginPage.module.css";
import Header from "../../../shared/header/Header";
const LoginPage = () => {
  const viewHeader = "login";
  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className={styles.content}>
        <h1>안녕하세요, 사장님</h1>
        <p>서비스를 이용하기 위해 로그인 해주세요!</p>
        <form>
          <div className={styles["input-div"]}>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="이메일"
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="비밀번호"
            />
          </div>
          <div className={styles.forgot}>
            <h1>비밀번호를 잊으셨나요?</h1>
          </div>
          <button type="submit" className={styles["button-div"]}>
            <p>LogIn</p>
          </button>
        </form>
        <div className={styles.signup}>
          <p>계정이 없다면</p>
          <a>회원가입(발급받기)</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
