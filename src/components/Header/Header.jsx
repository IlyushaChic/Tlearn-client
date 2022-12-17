import React from "react";
import "./style.css";
import { useStore } from "effector-react";
import { $username } from "../../context/auth";
import { NavLink } from "react-router-dom";
import { getAuthDataFromLS, handleAlertMesage, removeUser } from "../../utils/auth";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";

const Header = () => {


  const[spinner,setSpinner]=useState(false)  
const AuthData=getAuthDataFromLS()
const username = AuthData.user.email
//console.log(AuthData.user.email)
 // console.log(username)

const goOut=()=>{

setSpinner(true)
setTimeout(()=>{
    removeUser()
    handleAlertMesage({
      alertText: "Выход успешно осуществлен", 
      alertStatus: "success",
    }); 
},1000)
}

  return (
    <header className="header__container">
      <div className="header__content">
        <div className="header__content-links"> 
          <NavLink
            to="/dictionary"
            className={({ isActive }) =>
              isActive ? `header__content-link_active` : `header__content-link`
            }>
            Словари
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? `header__content-link_active` : `header__content-link`
            }          >
            Пользователи
          </NavLink>
        </div>
            {username.length ? (
              <div className="header__containter-username">{username}</div>):"" 
            }
        <div className="header__container-btn__wrapper">
          
          <button className="header__container-btn" onClick={goOut}>
          {spinner ? <Spinner top={0} left={0} /> : "Выйти"}
            </button>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
