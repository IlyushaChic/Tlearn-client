import {createDomain} from 'effector'


//! Создавать разные омены к разным данным по такому типу 
const auth=createDomain()
export const setAuth=auth.createEvent()
export const setUserName=auth.createEvent()

//первое значение это предыдущее значение 
export const $auth=auth.createStore(false)
.on(setAuth,(_,value)=>value)
//принимает значение в setAuth и присваивает это значение в $auth


export const $username=auth.createStore('')
.on(setUserName,(_,value)=>value)





