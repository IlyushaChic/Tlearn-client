import React from "react";
import "./style.css";

const DictionaryItem = () => {
  return (
    <div className="body-dictionary_item">
      <div>id</div>
      <div>Базовый/средний</div>
      <div className="word">350/450</div>

      <div className="interface">
        <button>Редактировать</button>
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default DictionaryItem;
