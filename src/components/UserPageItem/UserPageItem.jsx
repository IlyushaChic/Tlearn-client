import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserDataFx } from "../../api/userClient";
import "./style.css";

const UserPageItem = ({ id=1, naming="qwer", words=234}) => {





  return (
    <div className="qwe">
      <div>{id}</div>
      <div>{naming}</div>
      <div>{words}</div>
      <div>-</div>
      <div>-</div>
      <hr />
    </div>
  );
};

export default UserPageItem;
