import {createDomain} from 'effector'


//! Создавать разные омены к разным данным по такому типу 
const auth=createDomain()
export const setAuth=auth.createEvent()
export const setUserName=auth.createEvent()

export const $auth=auth.createStore(false)
.on(setAuth,(_,value)=>value)

export const $username=auth.createStore('')
.on(setUserName,(_,value)=>value)





