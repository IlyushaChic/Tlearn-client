import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDictByIdFx } from "../../api/dictClient";
import { getUserDataFx } from "../../api/userClient";
import FormRemoveDictionary from "../DeletDictionaryPopap/DeletDictionaryPopap";
import FormSendDictionary from "../FormSendDictionary/FormSendDictionary";
import FormUpdatePopap from "../UpdateDictionaryPopap/UpdateDictionaryPopap";
import "./style.css";


const DictionaryItem = ({id,names,nElems,}) => {
const [delteDict,setDeleteDict]=useState(false)
const [updateDict,setUpdateDist]=useState(false)
const [data,setDate]=useState([]) 

useEffect(()=>{ 
  getDictByIdFx(id).then(res=>setDate(res))
},[updateDict])

const removeItem=(e)=>{
  e.preventDefault()
  setDeleteDict(true)
}

const closeDict=(event)=>{
  event.preventDefault();
  setDeleteDict(false)
}

const UpdateItem=(e)=>{
  e.preventDefault()
  setUpdateDist(true)
}

function closeUpdateDict(event){
  event.preventDefault();  
  setUpdateDist(false)
} 

  return (
    <div className="dictionaryitem__container">
      {delteDict?<FormRemoveDictionary  name={names} onClose={closeDict}/> :''}
      {updateDict?<FormUpdatePopap  oldName={names}onClose={closeUpdateDict}/> :''}
        
        <div className="dictionaryitem__container-info">
      <div>{data.id}</div>
      <div className="name">{data.collectionName}</div>
      <div className="word">{data.nElems}</div>
        </div>

      <div className="dictionaryitem__container-btns">
        <button className="dictionaryitem__container-btn btn-update" onClick={UpdateItem}>Редактировать</button>
        <button className="dictionaryitem__container-btn  btn-remove" onClick={removeItem}> Удалить</button>
      </div>
    </div>
  );
};

export default DictionaryItem;
