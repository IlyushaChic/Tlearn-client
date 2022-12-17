import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { getUsersFx } from "../../api/userClient";
import Header from "../../components/Header/Header";
import UsersItem from "../../components/UsersItem/UsersItem";
import { $users, setUsers } from "../../context/users";
import { getAuthDataFromLS } from "../../utils/auth";
import "./style.css";

const UsersPage = () => {
  const store = useStore($users);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = async () => {
    const authData = getAuthDataFromLS();

    getUsersFx({ token: authData.accessToken }).then((result) =>
      setUsers(result)
    );
  };

  return (
    <div className="userspage__wrapper">
      <Header />
      <div className="userspage__content-header_info">
        <div className="userpage__content-header_info-container">
          <div className="userpage__content-header_info-info">
            <div className="userpage__content-id">id</div>
            <div className="userpage__content-email">Почта</div>
          </div>
          <div className="nothing" />
        </div>
      </div>
      <div className="userpage__content-item">
        {store.map((elem) => (
          <UsersItem key={elem.id} id={elem.id} email={elem.email} />
        ))}
    </div>
    </div>
  );
};

export default UsersPage;
