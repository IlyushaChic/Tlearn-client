import { createDomain } from "effector";

const dict = createDomain();


const handleRemoveDict = (state, name) => {
  const result= state.filter(elems=> elems.name !== name)
  return result;
};
//для получения словаря
export const setDict = dict.createEvent();
//для создания словаря
export const createDict = dict.createEvent();
//для обновления словаря
export const updateDict = dict.createEvent();
//для удаления словаря
export const removeDict = dict.createEvent();

export const $dict = dict
  .createStore([])
  .on(createDict, (state, dict) => [...state, dict])
  .on(setDict, (_, dict) => dict)
  .on(removeDict, (state, name) => [...handleRemoveDict(state, name)]);

