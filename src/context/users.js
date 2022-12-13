import {createDomain} from 'effector'


const users=createDomain()
export const setUsers=users.createEvent()
export const $users=users.createStore([])
.on(setUsers,(_,users)=>users)








