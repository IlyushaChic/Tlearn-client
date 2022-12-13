import axios from "axios";
import { createEffect } from "effector";


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
export const getDictByIdFx = createEffect(async (id) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/dictionary/get/${id}`,
      
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});


export const deleteDicrFX=createEffect(async (header)=>{

  try {
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
