import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDataFx } from "../../api/userClient";
import Header from "../../components/Header/Header";
import UserPageItem from "../../components/UserPageItem/UserPageItem";
import { getAuthDataFromLS } from "../../utils/auth";
import "./style.css";

const UserPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setDate] = useState([]);

  useEffect(() => {
    const authData = getAuthDataFromLS();
    getUserDataFx({ id: params.id, token: authData.accessToken }).then((res) =>
      setDate(res)
    );
  }, []);

  return (
    <>
      {data?.id ? (
        <div className="userpage__wrapper">
          <Header />
          <div className="userpage__wrapper-btn_container">
            <div className="userpage__wrapper-btn_block">
            <button
              className="userpage__wrapper-btn"
              onClick={() => navigate(-1)}
            >
              Назад
            </button>
            <div className="userpage__wrapper-btn_user-block">
              <button
              className="userpage__wrapper-btn" 
              onClick={() => {}}
            >
              Удалить
            </button>
            <button
              className="userpage__wrapper-btn progress"
              onClick={() => {}}
            >
              Выгрузить прогресс
            </button>
            </div>
            
</div>


          </div>
            <div className="userpage__username">{data?.email} </div>
            <div className="userpage__wrapper-info "> 
              <div>id</div>
              <div>Название словаря</div>
              <div>слов в словаре</div>
              <div>выученные</div>  
              <div>в процессе</div>

            </div>
            
            <UserPageItem
              id={data?.id}
              naming={data?.collectionName}
              words={data?.nElems}
            />


        </div>
      ) : (
        <div className="userpage__wrapper">
          <Header />
          <div className="userpage__wrapper-btn_container">
            <button
              className="userpage__wrapper-btn"
              onClick={() => navigate(-1)}
            >
              Назад
            </button>
          </div>

          <div>
            <div className="userpage__username">{data?.email} </div>
            <h1>НЕТ АКТИВНОГО СЛОВАРЯ</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPage;
