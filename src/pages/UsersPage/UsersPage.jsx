import React from "react";
import Header from "../../components/Header/Header";
import UsersItem from "../../components/UsersItem/UsersItem";
import "./style.css";

const UsersPage = () => {
  return (
    <div>
      <Header />
      <div className="block1">
          <div>id</div>
          <div>Почта</div>
      </div>


      <div>
        <UsersItem />
        <UsersItem />
        <UsersItem />
      </div>
    </div>
  );
};

export default UsersPage;
