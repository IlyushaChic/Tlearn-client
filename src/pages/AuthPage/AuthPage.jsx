import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthClient } from "../../api/authClient";
import { setAlert } from "../../context/alert";
import Spinner from "../../components/Spinner/Spinner";
import { handleAlertMesage } from "../../utils/auth";
import "./styles.css";


const AuthPage = ({ type }) => {
  const [spinner, setSpinner] = useState(false);
  const [typePage, setTypePage] = useState(`${type}`);
  const [send, setSend] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleAuthResponse = (result, navigatePath, alertText) => {
    if (!result) {
      setSpinner(false);
      return;
    }
    setSpinner(false);
    navigate(navigatePath);
    setAlert({ alertText: alertText, alertStatus: "success" });
  };
   const validateEmailAddres= (tinkoff) =>{
    const regExpTinkoff =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExpTinkoff.test(tinkoff)) {
      if (
        tinkoff.indexOf(
          "@tinkoff.ru",
          tinkoff.length - "@tinkoff.ru".length
        ) !== -1
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  const handleLogin = async (email) => {
    const validate= validateEmailAddres(email)
    console.log(validate)
    if (!email) {
      setSpinner(false);
      handleAlertMesage({
        alertText: "Заполните поле email",
        alertStatus: "warning", 
      });
      return;
    }
    if(!validate){
      setSpinner(false);
      handleAlertMesage({
        alertText: "Введите корректный Email",
        alertStatus: "warning",
      });
      return;
    }
    const result = await AuthClient.login(email);
    
    handleAuthResponse(
      result,
      "/activate",
      "Код доступа отправлен нам на почту"
    );
    setTypePage("/activate");
    setSend("");
  };
  const handleActivate = async (activationLink) => {
    if (!activationLink) {
      setSpinner(false);
      handleAlertMesage({
        alertText: "Заполните поле кода активации!",
        alertStatus: "warning",
      });
      return;
    }
    if (activationLink.length !== 6) {
      setSpinner(false); 
      handleAlertMesage({
        alertText: "Невалидный код активации!",
        alertStatus: "warning",
      });
      return;
    }
    setTimeout(()=>{
const result = AuthClient.activate(activationLink).then(result=>console.log(result))

handleAuthResponse(result, "/dictionary", "Вход выполнен");
    },2000)
    
  };

  const handleAuth = (e) => {
    e.preventDefault();
    setSpinner(true);
    switch (typePage) {
      case "/login":
        handleLogin(emailRef.current.value);
        break;
      case "/activate":
        handleActivate(emailRef.current.value);
        break;
      default:
        break;
    }
  };
  const backPath = (e) => {
    e.preventDefault();
    setSend("");
    setTypePage("/login");
  };

  return (
    <div className="auth__page-container">
      {typePage === "/login" ? (
        <div className="auth__page-body">
          <div className="auth__page-content">
            <h1>Введите почту</h1>
            <form onSubmit={handleAuth} className="auth__page-form">
              <label className="auth__page-form-label">
                <input
                  className="auth__page-form-input"
                  ref={emailRef}
                  type="text"
                  value={send}
                  onChange={(e) => setSend(e.target.value)}
                  placeholder="Введите свой email"
                />
                <div className="auth__page-form-btn__wrapper">
                  <button className="auth__page-form-btn">
                    {spinner ? <Spinner /> : "Далее"}
                  </button>
                </div>
              </label>
            </form>
          </div>
        </div>
      ) : (
        <div className="auth__page-body">
          <div className="auth__page-content">
          <h1>Мы отправили вам код на почту</h1>
          <form onSubmit={handleAuth} className="auth__page-form">
            <label className="auth__page-form-label">
              <input
                className="auth__page-form-input"
                type="text"
                ref={emailRef}
                value={send}
                onChange={(e) => setSend(e.target.value)}
                placeholder="Введите код"
              />
              <button className="auth__page-form-btn">
                {spinner ? <Spinner /> : "Далее"}
              </button>
              <button className="auth__page-form-btn" onClick={backPath}>
                Назад
              </button>
            </label>
          </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
