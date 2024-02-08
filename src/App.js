import './App.css';
import  LoginForm  from './Components/LoginForm/LoginForm.jsx';
import { BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import  Dashboard  from './Components/LoginForm/Dashboard.jsx';

function App() {
  return (
    <div>
      <Outlet/>
      <BrowserRouter>
      <Routes>
      <Route exact path = "/login" component = {LoginForm}/>
      <Route exact path = "/" component = {Dashboard}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
