import React from "react";
import './styles.css'
const FormSendDictionary = ({closeDict}) => {

  return (
    <div className="forma" >

      {/* //! Почитать про настройки этого всего дела
      //!может быть добавить крестик который будет закрывать все это  */}
      <form  onSubmit={closeDict} className="formm" action="#" >
        <input className="for-text" type="file" placeholder="+Прикрепить файл" />
        <input  className="for-header" type="text" />
        {/* <input   type="submit" /> */}
        <button onClick={closeDict}>Далее</button>
      </form>

    </div>
  );
};

export default FormSendDictionary;
