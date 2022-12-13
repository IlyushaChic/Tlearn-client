import React from "react";
import "./style.css";

const UserPageItem = ({ id=1, naming="qwer", words=234}) => {
  return (
    <div className="userpageitem__container">
      <div className="userpageitem__container-info">
    <div>{id}</div> 
      <div>{naming}</div>
      <div>{words}</div>
      <div>-</div>
      <div>-</div>
      <hr />

      </div>
  
    </div>
  );
};

export default UserPageItem;
