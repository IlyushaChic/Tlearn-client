import FormSendDictionary from "./components/FormSendDictionary/FormSendDictionary";
import AuthPage from "./pages/AuthPage/AuthPage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import UserPages from "./pages/UserPage/UserPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import { Router,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  return (
    <div className="App">

  <Routes>

<Route path="/auth" element={<AuthPage/>}/>
<Route path="/dictionary" element={<DictionaryPage/>}/>
<Route path="/users" element={<UsersPage/> }/>
<Route path="/users/:id" element={<UserPages/>}/>
  </Routes>

      {/* Прописать HOC который будет добавлять всем заголовок вверху */}
{/* <h1>Прописать всю логику которая будет взаимодействовать с Бэком</h1>
<h1>Найти нормальный дизайн +-</h1>
<h1>Сделать по красоте </h1>
<h1>Добавить анимации нормально так хаверы не ховеры и чотбы все гладко и красиво было  </h1> */}
    </div>
  );
}

export default App;
