import { useStore } from "effector-react";
import React, { useEffect, useState } from "react";
import { getDictFx, updateDictFX } from "../../api/dictClient";
import { $dict, setDict } from "../../context/distionary";
import { handleAlertMesage } from "../../utils/auth";
import Spinner from "../Spinner/Spinner";
import "./style.css";
const FormUpdatePopap = ({ onClose,oldName }) => {

  const [spinner,setSpinner]=useState(false)
  const store=useStore($dict)

  const [header,setHeader]=useState('')


  useEffect(()=>{
    handleGetDictionary() 
  
  
  },[])
  
  const handleGetDictionary= async ()=>{  
    getDictFx()
    .then(result=>{    
      setDict(result)
    }
      )
    // return dict
  } 


  const onUpdate=async (e)=>{

    e.preventDefault()
    setSpinner(true);

    const updateData={
      oldName:oldName,
      newName:header
    }
//    console.log(oldName,header)
  setTimeout(() => {
  updateDictFX(updateData).then(()=>handleGetDictionary())
setSpinner(false);
  onClose(e)
  handleAlertMesage({
    alertText: "Словарь успешно обновлен",
    alertStatus: "success",
  });
}, 1000);

  }





  //! отправка через сабмит
  return (
    <div className="popap">
      <div className="popap__body">
        <form  className="submit-file" action="#">
          <button className="btn btn-danger" onClick={onClose}>
            X
          </button>
          <div className="update-form">
           <p>Введите новое название словаря</p>
          <input value={header} onChange={(e)=>setHeader(e.target.value)} type="text" />
          </div>


          <button className="btn btn-primary" onClick={onUpdate}>
          {spinner ? <Spinner top={0} left={0} /> : "Далее"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormUpdatePopap;
