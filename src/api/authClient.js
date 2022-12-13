  import { setAuth, setUserName } from '../context/auth';
import api from './axiosClient';


export class AuthClient{
static async login(email){
  try{
    const result = await api.post('/auth/login',{email:email} )
    console.log(result);
    if(result.status===200){
      localStorage.setItem('auth',JSON.stringify(result.data))
      return true
    }
    return false
  }catch(e){
    console.log(e);
  }
}

static async activate(activationLink){
  try{
    const result = await api.post('/auth/activate',{activationLink:activationLink} )
    console.log(result);
    if(result.status===200){
      setAuth(true)
      setUserName(result.data.user.email)
      localStorage.setItem('activate ',JSON.stringify(result.data))
      return true
    }
    return false
  }catch(e){
    console.log(e);
  }
}
}