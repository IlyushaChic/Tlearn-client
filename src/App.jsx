import FormSendDictionary from "./components/FormSendDictionary/FormSendDictionary";
import AuthPage from "./pages/AuthPage/AuthPage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import UserPages from "./pages/UserPage/UserPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { $auth } from "./context/auth";
import { useStore } from "effector-react";
import { $alert } from "./context/alert";
import Alert from './components/Alert/Alert'

function App() {



  // const isLiggedIn = useStore($auth);
  const isLiggedIn = true


  
  const alert =useStore($alert)
console.log(alert)
  return (
    <div className="App">
     
{alert.alertText &&   <Alert propsText={alert.alertText} propsStatus={alert.alertStatus}/>}
      <Routes>


//! добавить статус 404 что нет такой страницы или редиректить на базовую стр 

        <Route path="/" element={isLiggedIn? <Navigate to={"/dictionary"}/>:<Navigate to={"/login"}/>} />





        <Route path="/login" element={isLiggedIn? <Navigate to={"/dictionary"}/>:<AuthPage type={"/login"} />} />
        <Route path="/activate" element={isLiggedIn? <Navigate to={"/dictionary"}/>:<AuthPage  type={"/activate"}/>} />

        <Route path="/dictionary" element={ isLiggedIn? <DictionaryPage />: <AuthPage type={"/login"} />} />

        <Route path="/users" element={ isLiggedIn? <UsersPage />: <AuthPage type={"/login"}/>} />
        <Route path="/users/:id" element={isLiggedIn?<UserPages />: <AuthPage type={"/login"}/>} />
      </Routes>

      {/* <h1>Прописать всю логику которая будет взаимодействовать с Бэком</h1>
<h1>Найти нормальный дизайн +-</h1>
<h1>Сделать по красоте </h1>
<h1>Добавить анимации нормально так хаверы не ховеры и чотбы все гладко и красиво было  </h1> */}
    </div>
  );
}

export default App;
