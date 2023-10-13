import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Userlogin from './Login/User/Userlogin';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/:users' element={<Userlogin/>}/>
        </Routes>
   
      </Router>


    </div>
  );
}

export default App;
