import React, { useReducer, useCallback } from "react";
import axios from "axios";
import styles from "./LoginPage.module.css";
import Header from "../../../shared/header/Header";

const formReducer = (state, action) => {
  //전반적인 입력 관리 useReducer의 리듀서함수
  switch (action.type) {
    case "INPUT_CHANGE":
      const updatedInputs = {
        ...state.inputs,
        [action.inputId]: { value: action.value, isValid: action.isValid },
      };

      let formIsValid = true; //폼 전체 유효성 확인
      for (const inputId in updatedInputs) {
        formIsValid = formIsValid && updatedInputs[inputId].isValid;
      }

      return { ...state, inputs: updatedInputs, isValid: formIsValid };

    default:
      return state;
  }
};

const LoginPage = () => {
  const viewHeader = "login";

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    isValid: false,
  });

  const inputHandler = useCallback((event) => {
    //리렌더링시 함수 재생성 방지
    const { id, value } = event.target;
    let isValid = value.trim() !== ""; //빈 문자열이 아니면 해당 input태그 유효하다고 판단
    dispatch({
      //useReducer를 호출할 수 있는 ㄷ스패치함수
      type: "INPUT_CHANGE",
      inputId: id,
      value: value,
      isValid: isValid,
    });
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!formState.isValid) {
      console.log("이메일 혹은 비밀번호를 입력해주세요.");
      return;
    }

    const loginData = {
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    };

    try {
      const response = await axios.post("/api/users/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Login successful", response.data);
        // 로그인 성공 처리 (예: 리다이렉트)
      } else {
        console.error("Login failed", response.data);
        // 로그인 실패 처리 (예: 오류 메시지 표시)
      }
    } catch (err) {
      console.error("Login error", err);
      // 네트워크 오류 처리
    }
  };
  return (
    <div>
      <Header viewHeader={viewHeader} />
      <div className={styles.content}>
        <h1>안녕하세요, 사장님</h1>
        <p>서비스를 이용하기 위해 로그인 해주세요!</p>
        <form onSubmit={loginHandler}>
          <div className={styles["input-div"]}>
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="이메일"
              onChange={inputHandler}
            />
            <input
              className={styles.input}
              type="password"
              id="password"
              placeholder="비밀번호"
              onChange={inputHandler}
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
          <a href="/signup">회원가입(발급받기)</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
