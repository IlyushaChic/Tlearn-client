import React, { useState } from "react";
import DictionaryItem from "../../components/DictionaryItem/DictionaryItem";
import FormSendDictionary from "../../components/FormSendDictionary/FormSendDictionary";
import Header from "../../components/Header/Header";
import "./style.css";
import { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useStore } from "effector-react";
import { $dict, setDict } from "../../context/distionary";
import { getDictFx } from "../../api/dictClient";
import { getAuthDataFromLS } from "../../utils/auth";

const DictionaryPage = () => {
  const [spinner, setSpunner] = useState(false);
  const [addDict, setAddDict] = useState(false);
  const store = useStore($dict);
  const authData = getAuthDataFromLS();

  //! Добавить изменения когда меняется стор
  useEffect(() => {
    handleGetDictionary(); 
   }, [addDict]);


  //! сделать эту функцию  импортируемой и вынести
  const handleGetDictionary = async () => {
    const authData=getAuthDataFromLS()
    getDictFx({token: authData.accessToken}).then((result) => setDict(result));
  }; 

  const addDictionary = () => {
    setAddDict(true);
  };

  const closeDictionary = () => {
    setAddDict(false);
  };

  return ( 
    <div className="dictionarypage__wrapper">
      <div className="dictionarypage__content">
        <Header />
        {addDict ? <FormSendDictionary  closeDict={closeDictionary} /> : ""}
        <div className="dictionarypage__content-header">
          <div className="dictionarypage__content-header_info">
            <div>id</div>
          <div >Название словаря</div>
          <div >Слов в словаре</div>
          </div> 
          
        </div>
        {/* {spinner && <Spinner top={70} left={360} />} реализовать!!! */}

        <div className="body-dictionary">
          {store.map((elem) => (
            <DictionaryItem key={elem.id}  id={elem.id} names={elem.name}  />
          ))}
        </div>

        <div className="dictionarypage__content-btn__wrapper">
          <button
            className="dictionarypage__content-btn"
            onClick={addDictionary}
          >
            + Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DictionaryPage;
