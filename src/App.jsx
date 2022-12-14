import AuthPage from "./pages/AuthPage/AuthPage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import UserPages from "./pages/UserPage/UserPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { $auth, setAuth, setUserName } from "./context/auth";
import { useStore } from "effector-react";
import { $alert } from "./context/alert";
import Alert from './components/Alert/Alert'
import { getAuthDataFromLS, removeUser } from "./utils/auth";
import { useEffect } from "react";

function App() { 
  const alert =useStore($alert)
  let isLiggedIn = useStore($auth);

  useEffect(() => {
    const auth = getAuthDataFromLS();
    if (!auth || !auth.accessToken || !auth.refreshToken) {
      removeUser();
    } else {
      setAuth(true);
      setUserName(auth.username);
    }
  }, []);

  return (
    <>
      {alert.alertText && <Alert propsText={alert.alertText} propsStatus={alert.alertStatus}/>}
      <Routes>
        <Route path="/" element={isLiggedIn? <Navigate to={"/dictionary"}/>:<Navigate to={"/login"}/>} />
        <Route path="*" element={isLiggedIn? <Navigate to={"dictionary"}/>:<AuthPage type={"/login"}  />} />        
        <Route path="/login" element={isLiggedIn? <Navigate to={"dictionary"}/>:<AuthPage type={"/login"} />} />
        <Route path="/activate" element={isLiggedIn? <Navigate to={"dictionary"}/>:<AuthPage  type={"/login"}/>} />
        <Route path="/dictionary" element={ isLiggedIn? <DictionaryPage />: <AuthPage type={"/login"} />} />
        <Route path="/users" element={ isLiggedIn? <UsersPage />: <AuthPage type={"/login"}/>} />
        <Route path="/users/:id" element={isLiggedIn?<UserPages />: <AuthPage type={"/login"}/>} />
      </Routes>
    </>
  );
}

export default App;
