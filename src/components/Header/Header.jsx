import React from "react";
import "./style.css";
import {useStore} from 'effector-react'
import { $username } from "../../context/auth";

const Header = () => {
   const username=useStore($username)


  return (

      <header className="header-block">
        <div className="header-interface">
          <div>Словари</div>
          <div>Пользователи</div>
        </div>        
        <div className="header-user">
          <div>{username.length? <h2 style={{color:'red',fontSize:'16px'}}>{username}</h2>: '' }</div>
          <button>выйти</button>
        </div>
      </header>


  );
};

export default Header;
