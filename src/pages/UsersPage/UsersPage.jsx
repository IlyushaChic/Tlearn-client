import { useStore } from "effector-react";
import React, { useEffect } from "react";
import { getUsersFx } from "../../api/userClient";
import Header from "../../components/Header/Header";
import UsersItem from "../../components/UsersItem/UsersItem";
import { $users, setUsers } from "../../context/users";
import "./style.css";

const UsersPage = () => {



  const store=useStore($users) 



  useEffect(()=>{
    handleGetUsers()
   // console.log(store)
  },[])

  

  const handleGetUsers= async ()=>{
    getUsersFx()
    .then(result=>setUsers(result))  
  }





  return (
    <div className="users-wrapper">
      <Header />
      <div className="block1">
          <div>id</div>
          <div>Почта</div>   
             </div>
      <div>
      {store.map(elem=>  <UsersItem id={elem.id} email={elem.email}/>)}
       
  
      </div>
    </div>
  );
};

export default UsersPage;
