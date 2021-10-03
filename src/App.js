import logo from './logo.svg';
import './App.css';
import { Route,  Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './Components/login';
import Dashbord from './Components/dashboard';
import LandingPage from './Components/landingPage';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Route exact path = "/" component={LandingPage}/>
       <Route path = "/login" component={Login}/>
       <Route path = "/dashboard" component={Dashbord}/>
     </BrowserRouter>
    </div>
  );
}

export default App;
