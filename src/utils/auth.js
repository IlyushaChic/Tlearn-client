import { setAlert } from "../context/alert"


export const handleAlertMesage=(alert)=>{  
  setAlert(alert)
  setTimeout(()=>setAlert({alertStatus:'',alertText:'',}),3000)
}

export const getAuthDataFromLS=()=>{
try {
  const LSData=JSON.parse(localStorage.getItem('activate '))
  return LSData
  } catch (error) {
  console.log(error);
}
}