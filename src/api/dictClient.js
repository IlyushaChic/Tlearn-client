import axios from "axios";
import { createEffect } from "effector";
import api from "./axiosClient";

export const createDictFx = createEffect(async ({ header, dictionarys }) => {
  try {
    const formData = new FormData();
    formData.append("dictionarys", dictionarys);
    formData.append("header", header);
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:5000/api/dictionary/add");
    request.send(formData);
    return;
  } catch (error) {
    console.log(error);
  }
});

export const getDictFx = createEffect(async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/dictionary/get",
      
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});


export const deleteDicrFX=createEffect(async (header)=>{

  try {//console.log(header)
    //Используем header который по факту name  cardCollection
     await axios.post(
      "http://localhost:5000/api/dictionary/remove",
      {
        header: header        
      }
    );
    return 
  } catch (error) {
    console.log(error);
  }
})

export const updateDictFX=createEffect(async (updateData)=>{

  try {
  //  console.log(updateData.oldName)
  //  console.log(updateData.newName)
    // Используем header который по факту name  cardCollection
     await axios.patch(
      "http://localhost:5000/api/dictionary/update",
      {
        oldHeader: updateData.oldName,
        newHeader: updateData.newName
      }
    );
    return 
  } catch (error) {
    console.log(error);
  }
})
