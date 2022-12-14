import { setAlert } from "../context/alert"
import { setAuth, setUserName } from "../context/auth"
import { setDict } from "../context/distionary"



export const removeUser=()=>{
localStorage.removeItem('auth')
setAuth(false)
setUserName('')
setDict([])
}


export const handleAlertMesage=(alert)=>{  
  setAlert(alert)
  setTimeout(()=>setAlert({alertStatus:'',alertText:'',}),3000)
}

export const getAuthDataFromLS=()=>{
try {
  const LSData=JSON.parse(localStorage.getItem('auth'))
  if(!LSData){
    removeUser()
    return 
  }
  return LSData
  } catch (error) {
  console.log(error);
}
}