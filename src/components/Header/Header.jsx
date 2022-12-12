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

        <div className="header-user">
          <div>
            {username.length ? (
              <h2 style={{ color: "red", fontSize: "16px" }}>{username}</h2>
            ) : (
              ""
            )}
          </div>
          <button className="btn btn-primary">выйти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
