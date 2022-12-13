import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./styles.css";

import Spinner from "../Spinner/Spinner";
import { createDictFx, getDictFx } from "../../api/dictClient"; 
import { $dict, setDict, } from "../../context/distionary";
import { handleAlertMesage } from "../../utils/auth";
import { useStore } from "effector-react";
const FormSendDictionary = ({ closeDict, }) => {

  const [file, setFile] = useState(false);
  const [fileName, setFileName] = useState("");

  const [title, setTitle] = useState("");

  const [spinner, setSpinner] = useState(false);
  const [data,setDate]=useState([]) 

  const store=useStore($dict)

  const handleGetDictionary= async ()=>{  
    getDictFx()
    .then(result=>{ setDict(result)
    }
      )
  } 
   
  let inputValueFikeRef = useRef();
  const changeInpt = () => {
    let fileName = inputValueFikeRef.current.files[0].name;
    setFileName(fileName);
    setFile(true);
  };

  const addDictionaryFile = async (e) => {
    e.preventDefault();
    setSpinner(true);
    createDictFx({header:title,dictionarys:inputValueFikeRef.current.files[0]})
    setTimeout(() => {

 handleGetDictionary()
      setSpinner(false);
      closeDict();
      handleAlertMesage({
        alertText: "Словарь успешно добавлен",
        alertStatus: "success",
      });
    }, 1000);
  };

  const closePopap = () => {
    closeDict();
  };

  return (
    <div className="send__popap-wrapper">
      <div className="send__popap-body">
         <form
          className="send__popap-body_form"
          action="#"
        >
          <button className="send__popap-btn" onClick={closePopap}>
            X
          </button>
          <div className="send__popap-body_form-content">
              <input
                type="file"
                name="file"
                id="input__file"
                onChange={changeInpt}
                className="input input__file"
                ref={inputValueFikeRef}
              />
              <label className="input__file-button" htmlFor="input__file">
                {file ? `${fileName}` : "+ Выберите файл"}
              </label>
      <div className="input__header_wrapper">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input__headername"
                type="text"
                placeholder="Введите новое название словаря"
              />
          </div>
            </div>
              <button className="send__popap-btn btn-submit" onClick={addDictionaryFile}>
            {spinner ? <Spinner top={0} left={0} /> : "Далее"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSendDictionary;
