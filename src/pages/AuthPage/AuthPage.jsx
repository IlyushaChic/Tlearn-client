import React, { useState } from "react";
import { useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthClient } from "../../api/authClient";
import { setAlert } from "../../context/alert";
import Spinner from "../../components/Spinner/Spinner";
import "./styles.css";
import { handleAlertMesage } from "../../utils/auth";

const AuthPage = ({ type }) => {
  const [spinner, setSpinner] = useState(false);
  const [typePage, setTypePage] = useState(`${type}`);
  const [send, setSend] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();

  const handleAuthResponse = (result, navigatePath, alertText) => {
    if (!result) {
      setSpinner(false);
      return;
    }
    setSpinner(false);
    navigate(navigatePath);
    setAlert({ alertText: alertText, alertStatus: "success" });
  };

  const handleLogin = async (email) => {

    //TODO добавить валидацию именно на email
    // !добавить валидацию именно на тинькофф 
    if (!email) {
      setSpinner(false);
      handleAlertMesage({
        alertText: "Заполните поле email",
        alertStatus: "warning",
      });
      return;
    }
    const result = await AuthClient.login(email);
    handleAuthResponse(result,'/activate',"Код доступа отправлен нам на почту")
    
    //TODO добавить проверку на статус код 200 и в противном случае не рендерить активейт
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
    const result = await AuthClient.activate(activationLink);
    handleAuthResponse(result,'/dictionary',"Вход выполнен")
    };

  const handleAuth = (e) => {
    e.preventDefault();
    setSpinner(true);
    switch (type) {
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

  const backPath=(e)=>{
    e.preventDefault()
    setTypePage('/login')
    }

  return (
    <div className="container">
      {typePage === "/login" ? (
        <div className="block">
          <h1>Введите почту</h1>

          <form onSubmit={handleAuth} className="form-group">
            <label className="auth-label">
              <input
                className="form-control"
                ref={emailRef}
                type="text"
                value={send}
                onChange={(e) => setSend(e.target.value)}
                placeholder="Введите свой email"
              />
              <button className="btn btn-primary auth-btn">
                {spinner ? <Spinner top={5} left={20} /> : "Далее"}
              </button>
            </label>
          </form>
        </div>
      ) : (
        <div className="block">
          <h1>Мы отправили вам код на почту</h1>
          <form onSubmit={handleAuth} className="form-group">
            <label className="auth-label">
              <input
                className="form-control"
                type="text"
                ref={emailRef}
                value={send}
                onChange={(e) => setSend(e.target.value)}
                placeholder="Введите код"
              />
              <button className="btn btn-primary auth-btn">
                {spinner ? <Spinner top={5} left={20} /> : "Далее"}
              </button>
                <button className="btn btn-primary auth-btn" onClick={backPath}> Назад</button>
            </label>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
