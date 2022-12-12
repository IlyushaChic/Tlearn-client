import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDataFx } from "../../api/userClient";
import Header from "../../components/Header/Header";
import UserPageItem from "../../components/UserPageItem/UserPageItem";
import "./style.css";

const UserPage = () => {
  const navigate=useNavigate()





  const params =useParams()
  
  const [data,setDate]=useState([])
  
  
   
  useEffect(()=>{ 
  
  //console.log(params)
   getUserDataFx(params.id).then(res=>setDate(res))
  console.log(data);
   
  },[])
  
  console.log("data1");
  console.log(data);
  
   













  const fakeDate=[
    {id:'1',naming:'qwerty',words:'30',compliete:'10',inProccess:'20'},
    {id:'2',naming:'qwasdfy',words:'50',compliete:'30',inProccess:'20'},
    {id:'3',naming:'SEGSGafrty',words:'300',compliete:'100',inProccess:'200'},
  ]

  return (
    <div className="user__page-wrapper">
      <Header />
      <br />
      <div className="user_page-btn">
           <button className="btn btn-primary" onClick={()=>navigate(-1)}>Назад</button>
      </div>
  <div>{data.email} </div>
      <br />

      <div className="help">
        <div >id</div>
        <div>Название словаря</div>
        <div>слов в словаре</div>
        <div>выученные</div>
        <div>в процессе</div>
      </div>

{/* {data.map(elem=><UserPageItem 
id={elem.id} 
naming={elem.naming} 
words={elem.words} 

/>)}      */}
      <UserPageItem 
      id={data.id}
      naming={data.collectionName} 
      words={data.nElems} 
      />
    </div>
  );
};

export default UserPage;
