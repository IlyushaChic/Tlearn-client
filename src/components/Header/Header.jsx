import React from "react";
import "./style.css";
import { useStore } from "effector-react";
import { $username } from "../../context/auth";
import { NavLink } from "react-router-dom";

const Header = () => {
  const username = useStore($username);
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
          <button className="header__container-btn">Выйти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
