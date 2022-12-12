import { useStore } from "effector-react";
import React, { useEffect, useState } from "react";
import { deleteDicrFX, getDictFx } from "../../api/dictClient";
import { $dict, removeDict, setDict } from "../../context/distionary";
import { getAuthDataFromLS, handleAlertMesage } from "../../utils/auth";
import Spinner from "../Spinner/Spinner";
import "./style.css";
const FormRemoveDictionary = ( {onClose,name} ) => {
  //! отправка через сабмит

//console.log(name)
const [spinner,setSpinner]=useState(false)
const store=useStore($dict) 
//console.log(store)





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

 const onRemove=async (e)=>{

    e.preventDefault()
    setSpinner(true);




 


   // await getDictFx().then(data=>  console.log(data))
  
  
 //   setDict(data) 
//  console.log(name)
//   console.log(store);
// removeDict(name) //! не получается изменять стейт сразу , и не обновляется страница при изменении


//  console.log(store)
//  console.log(header)
   // const qwerty=getAuthDataFromLS//!пока не надо 

    setTimeout(() => {
      //! работает
 deleteDicrFX(name).then(()=>  handleGetDictionary()) 
  setSpinner(false);
    onClose(e)
    handleAlertMesage({
      alertText: "Словарь успешно удален",
      alertStatus: "success",
    });
}, 1000);
// здесь прописать логику и лучше внутри тайма чтобы удалялось с задержкой 
handleAlertMesage({alertStatus:'success',AlertText:'Словарь успешно удален'})
console.log('Удалили')

  }



  return (
    <div className="popap">


      <div className="popap__body">
        <form  className="submit-file" action="#">
          <button className="btn btn-danger" onClick={onClose}>
            X
          </button>

  <h1 style={{textAlign:'center'}}>Вы уверени что хотите удалить словарь</h1>
      <div>
          <button className="btn btn-primary" onClick={onClose}>
            Отмена
          </button>
          <button className="btn btn-primary" onClick={onRemove} >
              {spinner ? <Spinner top={0} left={0} /> : "Далее"}
          </button>
      </div>
        
        </form>
      </div>
    </div>
  );
};

export default FormRemoveDictionary;
