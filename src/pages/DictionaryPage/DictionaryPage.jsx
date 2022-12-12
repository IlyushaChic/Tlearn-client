import React, { useState } from "react";
import DictionaryItem from "../../components/DictionaryItem/DictionaryItem";
import FormSendDictionary from "../../components/FormSendDictionary/FormSendDictionary";
import FormRemoveDictionary from "../../components/DeletDictionaryPopap/DeletDictionaryPopap";
import Header from "../../components/Header/Header";
import "./style.css";
import { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useStore } from "effector-react";
import { $dict, setDict } from "../../context/distionary";
import { getDictFx } from "../../api/dictClient";
import { getAuthDataFromLS } from "../../utils/auth";

const DictionaryPage = () => {
const [spinner,setSpunner]=useState(false)

const [addDict,setAddDict]=useState(false)

const store=useStore($dict) 

const authData = getAuthDataFromLS();   

//! Добавить изменения когда меняется стор 
useEffect(()=>{
  handleGetDictionary()
},[])
// нужна альтернатива так как бесконеынй цикл создается 
// придумать как будет обновляться состояние при добавлении элемента

//! сделать эту функцию тдельной и импортируемой 
const handleGetDictionary= async ()=>{

  //в идеаале забирать из локал стораджа данные токена для разрешения выполнения функции
 //console.log(authData.accessToken); 

 //{token: authData.accessToken}
  const dictionary =getDictFx()
  .then(result=>setDict(result))
  
 //  console.log(store)
  // return dict

}

  //const [dict, setDict] = useState(false);
  const addDictionary = () => {
    setAddDict(true);
  };
  const closeDictionary = () => {
    setAddDict(false);
  };

  return (
    <div className="body">
      {addDict ? <FormSendDictionary closeDict={closeDictionary} /> : ""}
      <Header />
      {/* <div className="header-dictionary">
        <div >id</div>
        <div>Название словаря</div>
        <div className="words">Слов в словаре</div>
        <div className="blocki" />
      </div>
{spinner && <Spinner top={70} left={360} />}

      <div className="body-dictionary">


      {store.map(elem=> <DictionaryItem id={elem.id} names={elem.name} nElems={30}/>)}

      </div>

      <div className="add-dictionary">
        <button className="btn btn-primary" onClick={addDictionary}>
          + Добавить
        </button>
      </div> */}
    </div>
  );
};

export default DictionaryPage;
