import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const UsersItem = ({ id, email }) => {
  const navigate = useNavigate();

  return (
    <div className="usersitem__container">
      <div className="usersitem__container-info">
        <div className="useritem-id">{id}</div>
        <div className="useritem-email">{email}</div>
      </div>
      <div className="useritem__cintainer-btn">
        <button
          className="usersitem__container-btn"
          onClick={() => navigate(`${id}`)}
        >
          Профиль
        </button>
      </div> 
    </div>
  );
};

export default UsersItem;
