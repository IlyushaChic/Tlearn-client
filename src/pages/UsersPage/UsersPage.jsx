import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { getUsersFx } from "../../api/userClient";
import Header from "../../components/Header/Header";
import UsersItem from "../../components/UsersItem/UsersItem";
import { $users, setUsers } from "../../context/users";
import "./style.css";

const UsersPage = () => {
  const store = useStore($users);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = async () => {
    getUsersFx().then((result) => setUsers(result));
  };

  return (
    <div className="userspage__wrapper">
      <Header />
      <div className="userspage__content-info">
        <div>id</div>
        <div>Почта</div>
      </div>
      <div>
        {store.map((elem) => (
          <UsersItem id={elem.id} email={elem.email} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
