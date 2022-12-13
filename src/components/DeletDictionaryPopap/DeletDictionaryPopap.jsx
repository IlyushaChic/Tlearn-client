import { useStore } from "effector-react";
import React, { useEffect, useState } from "react";
import { deleteDicrFX, getDictFx } from "../../api/dictClient";
import { $dict, removeDict, setDict } from "../../context/distionary";
import { getAuthDataFromLS, handleAlertMesage } from "../../utils/auth";
import Spinner from "../Spinner/Spinner";
import "./style.css";
const FormRemoveDictionary = ({ onClose, name, }) => {
  const [spinner, setSpinner] = useState(false);
  const store = useStore($dict);
  const onRemove = async (e) => {
    e.preventDefault();
    setSpinner(true);

 
    // const qwerty=getAuthDataFromLS//!пока не надо 
    setTimeout(() => {
      setSpinner(false); 
      deleteDicrFX(name);
        removeDict(name)
      onClose(e);
      handleAlertMesage({
        alertText: "Словарь успешно удален",
        alertStatus: "success",
      }); 
    }, 1000);
  };
 
  return (
    <div className="delete__popap-body-wrapper">
      <div className="delete__popap-body">
        <form className="delete__popap-body_form" action="#">
          <button className="delete__popap-btn " onClick={onClose}>
            X
          </button>
          <h1 style={{ textAlign: "center" ,color:'#6c6c6c'}}>
            Вы уверени что хотите удалить словарь
          </h1>
          <div>
            <button className="delete__popap-btn btn-back" onClick={onClose}>
              Отменить
            </button>
            <button className="delete__popap-btn btn-submit" onClick={onRemove}>
              {spinner ? <Spinner top={0} left={0} /> : "Удалить"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRemoveDictionary;
