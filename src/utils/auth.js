import { setAlert } from "../context/alert"



export const handleAlertMesage=(alert)=>{
  
  setAlert(alert)
  setTimeout(()=>setAlert({alertStatus:'',alertText:'',}),3000)
}