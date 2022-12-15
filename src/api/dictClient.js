import axios from "axios";
import { createEffect } from "effector";


//TODO отрефакторить методы запросов к серверу (api (axiosClient)) 

export const createDictFx = createEffect(async ({ header, dictionarys ,token}) => {
  try {
    console.log(token);
    
    const formData = new FormData();
    formData.append("dictionarys", dictionarys);
    formData.append("header", header);
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:5000/api/dictionary/add",{headers:{'Authorization':`Bearer ${token}`}});
    request.send(formData);
    return;
  } catch (error) {
    console.log(error);
  }
});

export const getDictFx = createEffect(async ({token}) => {
  try {
console.log(token)
    const { data } = await axios.get(
      "http://localhost:5000/api/dictionary/get",
      {headers:{'Authorization':`Bearer ${token}`}}
      
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getDictByIdFx = createEffect(async ({id,token}) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/dictionary/get/${id}`,
      {headers:{'Authorization':`Bearer ${token}`}}
    );
    return data; 
  } catch (error) {
    console.log(error);
  }
});


export const deleteDicrFX=createEffect(async ({header,token})=>{
console.log(header,token);

  try {
    await axios.post(
      "http://localhost:5000/api/dictionary/remove",
      {
        header: header        
      },     
    {headers:{'Authorization':`Bearer ${token}`}}
    );
    return 
  } catch (error) {
    console.log(error);
  }
})

export const updateDictFX=createEffect(async ({updateData,token})=>{
  try {
    await axios.patch(
      "http://localhost:5000/api/dictionary/update",
      {
        oldHeader: updateData.oldName,
        newHeader: updateData.newName
      },
      {headers:{'Authorization':`Bearer ${token}`}}
    );
    return 
  } catch (error) {
    console.log(error);
  }
})
