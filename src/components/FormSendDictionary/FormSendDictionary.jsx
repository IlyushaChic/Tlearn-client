import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./styles.css";

import Spinner from "../Spinner/Spinner";
import { createDictFx, getDictFx } from "../../api/dictClient";
import { setDict } from "../../context/distionary";
import { handleAlertMesage } from "../../utils/auth";
const FormSendDictionary = ({ closeDict }) => {
  //! отправка через сабмит

  const [file, setFile] = useState(false);
  const [fileName, setFileName] = useState("");

  const [title, setTitle] = useState("");

  const [spinner, setSpinner] = useState(false);






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
  
  
  let inputValueFikeRef = useRef();
  const changeInpt = () => {
    let fileName = inputValueFikeRef.current.files[0].name;
    setFileName(fileName);
    setFile(true);
  };


  const addDictionaryFile = async (e) => {
    e.preventDefault();
    setSpinner(true);
    setTimeout(() => {


createDictFx({header:title,dictionarys:inputValueFikeRef.current.files[0]}).then(()=>  handleGetDictionary()) 
      setSpinner(false);
      closeDict();
      handleAlertMesage({
        alertText: "Словарь успешно добавлен",
        alertStatus: "success",
      });
    }, 1000);
    //!вывести алерт что успешно или нет

    // console.log(fileName);
    // console.log(inputValueFikeRef.current.files);
    // console.log(title);

    //{header,dictionarys}
    
  // console.log(result)


    //! Отправлялся запрос сразу в БД и добавлялся тикет
  };








  


  const closePopap = () => {
    closeDict();
  };

  return (
    <div className="popap">
      <div className="popap__body">
        {/* onSubmit={closeDict} */}
        <form
          className="submit-file"
          style={{ alignItems: "flex-end" }}
          action="#"
        >
          <button className="btn btn-danger" onClick={closePopap}>
            X
          </button>

          <div className="form-wrapper">
            <div className="input__wrapper">
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
            </div>
            <div className="input_header_wrapper">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="for-header"
                type="text"
                placeholder="Введите новое название словаря"
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={addDictionaryFile}>
            {spinner ? <Spinner top={0} left={0} /> : "Далее"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSendDictionary;
