import React, { useState } from "react";
import FormRemoveDictionary from "../DeletDictionaryPopap/DeletDictionaryPopap";
import FormSendDictionary from "../FormSendDictionary/FormSendDictionary";
import FormUpdatePopap from "../UpdateDictionaryPopap/UpdateDictionaryPopap";
import "./style.css";





const DictionaryItem = ({id,names,nElems}) => {
const [delteDict,setDeleteDict]=useState(false)


// console.log(id,names,nElems)

const removeItem=(e)=>{
  e.preventDefault()
  setDeleteDict(true)
}
 
const closeDict=(event)=>{
  event.preventDefault();
  setDeleteDict(false)
}

const [updateDict,setUpdateDist]=useState(false)


const UpdateItem=(e)=>{
  e.preventDefault()
  setUpdateDist(true)
}
 
const closeUpdateDict=(event)=>{
  event.preventDefault();
  setUpdateDist(false)
} 


  //console.log(closeDict)
  return (
    <div className="body-dictionary_item">
      {delteDict?<FormRemoveDictionary name={names} onClose={closeDict}/> :''}
      {updateDict?<FormUpdatePopap  oldName={names}onClose={closeUpdateDict}/> :''}

      <div>{id}</div>
      <div className="name">{names}</div>
      <div className="word">{nElems}</div>

      <div className="interface">
        <button className="btn btn-primary" onClick={UpdateItem}>Редактировать</button>
        <button className="btn btn-danger" onClick={removeItem}> Удалить</button>
      </div>
    </div>
  );
};

export default DictionaryItem;
