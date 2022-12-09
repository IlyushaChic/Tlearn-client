import React, { useState } from "react";
import DictionaryItem from "../../components/DictionaryItem/DictionaryItem";
import FormSendDictionary from "../../components/FormSendDictionary/FormSendDictionary";
import Header from "../../components/Header/Header";
import "./style.css";

const DictionaryPage = () => {

  const [dict,setDict]=useState(false)

  const addDict=()=>{
    setDict(true)
  }
  const closeDict=(event)=>{
    event.preventDefault();
    setDict(false)
  }



  return (
    <div style={{position:'absolute'}}>
      <Header />
      <div className="header-dictionary">
        <div>id</div>
        <div>Название словаря</div>
        <div className="words">Слов в словаре</div>
        <div className="blocki"/>
      </div>

      <div className="body-dictionary">
        <DictionaryItem />
        <DictionaryItem />
        <DictionaryItem />
      </div>


      <div className="add-dictionary">
        <button onClick={addDict}>+ Добавить</button>
      </div>
      
      {dict?<FormSendDictionary closeDict={closeDict}/> :''}
      


    </div>
  );
};

export default DictionaryPage;
