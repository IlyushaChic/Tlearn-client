import React from "react";
import "./style.css";
const Header = () => {
  return (
    <div>
      <header className="header-block">
        <div className="header-interface">
          <div>Словари</div>
          <div>Пользователи</div>
        </div>
        <div className="header-user">
          <div>тут будет юзер</div>
          <button>выйти</button>
        </div>
      </header>

    </div>
  );
};

export default Header;
