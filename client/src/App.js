import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Userlogin from './Login/User/Userlogin';
import Login from './Login/Login';
import Homepage from './Pages/Homepage/Homepage';
import Requestmentor from './Pages/Request/Requestmentor';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/:users' element={<Userlogin/>}/>
            <Route path='/requestmentor' element={<Requestmentor/>}/>

        </Routes>
   
      </Router>


    </div>
  );
}

export default App;
