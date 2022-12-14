import axios from "axios";
import { createEffect } from "effector";

export const getUsersFx = createEffect(async ({ token }) => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getUserDataFx = createEffect(async ({ id, token }) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/users/${id}/data`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});
