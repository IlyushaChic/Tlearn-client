import {createDomain} from 'effector'


const auth=createDomain()
export const setAuth=auth.createEvent()
export const setUserName=auth.createEvent()

export const $auth=auth.createStore(false)
.on(setAuth,(_,value)=>value)

export const $username=auth.createStore('')
.on(setUserName,(_,value)=>value)





