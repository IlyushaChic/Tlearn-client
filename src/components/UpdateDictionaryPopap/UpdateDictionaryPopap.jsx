import { useStore } from "effector-react";
import React, { useEffect, useState } from "react";
import { getDictFx, updateDictFX } from "../../api/dictClient";
import { $dict, setDict } from "../../context/distionary";
import { getAuthDataFromLS, handleAlertMesage } from "../../utils/auth";
import Spinner from "../Spinner/Spinner";
import "./style.css";
const FormUpdatePopap = ({ onClose,oldName }) => {

  const [spinner,setSpinner]=useState(false) 
  const [header,setHeader]=useState('')

  const onUpdate=async (e)=>{
    e.preventDefault()
    setSpinner(true);
    const updateData={
      oldName:oldName,
      newName:header
    }

const authData=getAuthDataFromLS()
  updateDictFX({updateData,token:authData.accessToken})
  setTimeout(() => {
  setSpinner(false);
  onClose(e)
  handleAlertMesage({
    alertText: "Словарь успешно обновлен",
    alertStatus: "success",
  });
  }, 1000);
  }

  return (
    <div className="update__popap-wrapper">
      <div className="update__popap-body">

        <form  className="update__popap-body_form" action="#">
          
          <div className="update__popap-body_form_content">
          <button className="send__popap-btn" onClick={onClose}>
            X
          </button>
          <div className="update-form">
          <p style={{color:'#6c6c6c'}}>Введите новое название словаря</p>
          <input  value={header} onChange={(e)=>setHeader(e.target.value)} type="text" />
          </div>
          <button className="send__popap-btn btn-submit" onClick={onUpdate}>
          {spinner ? <Spinner top={0} left={0} /> : "Далее"}
          </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default FormUpdatePopap;
