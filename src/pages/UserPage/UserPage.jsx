import React from "react";
import Header from "../../components/Header/Header";
import UserPageItem from "../../components/UserPageItem/UserPageItem";
import "./style.css";

const UserPage = () => {
  return (
    <div>
      <Header />

      <div className="help">
        <div>id</div>
        <div>Название словаря</div>
        <div>слов в словаре</div>
        <div>выученные</div>
        <div>в процессе</div>
      </div>

      <UserPageItem />
      <UserPageItem />
      <UserPageItem />
    </div>
  );
};

export default UserPage;
