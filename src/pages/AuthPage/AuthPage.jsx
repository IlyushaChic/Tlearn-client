import React, { useState } from "react";
import { useRef } from "react";
import "./styles.css";



export const validationInputs=(textInput)=>{
  const textInputValue= textInput.current.value


  const addDangerBorder=()=>{    
    textInputValue.value.length ?
    textInputValue.classList.remove('border-error') :
      textInputValue.classList.add('border-error')
  }

  if(!textInputValue){
    addDangerBorder()
    return false
  }  
  // так же добавить валидация на емаил и на то чтобы был тинькофф
  textInput.current.value=''

  textInputValue.classList.remove('border-error')

  return true

}



const AuthPage = () => {

  const [sendEmail, setSendEmail] = useState(false);

  const [send, setSend] = useState("");

  const sendEmailAddres = () => {
    setSendEmail(true);
    setSend("");
  };
  const sendActivateCode = () => {
    setSendEmail(false);
    setSend("");
  };

  return (
    <div className="auth-body">
      {!sendEmail ? (
        <div className="block">
          <h1>Введите почту</h1>
          <input
            className="form-block"
            type="text"
           
            value={send}
            onChange={(e) => setSend(e.target.value)}
            placeholder="Введите свой email"
          />
          <button onClick={sendEmailAddres}> Далее</button>
        </div>
      ) : (
        <div className="block">
          <h1>Мы отправили вам код на почту</h1>
          <input
            className="form-block"
            type="text"
            value={send}
            onChange={(e) => setSend(e.target.value)}
            placeholder="Введите код"
          />
          <button> Далее</button>
          <button onClick={sendActivateCode}> Назад</button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
