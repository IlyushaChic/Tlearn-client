import axios from "axios";
import { createEffect } from "effector";



export const getUsersFx = createEffect(async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/users",
      
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getUserDataFx = createEffect(async (id) => {
  try {
    const { data } = await axios.get(
     `http://localhost:5000/api/users/${id}/data` ,
      
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});
