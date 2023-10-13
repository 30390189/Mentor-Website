import React from 'react'
import login from './Login.module.scss'
import logo from '../files/logo/fedlogo.png';
import {useNavigate} from 'react-router-dom'
export default function Login() {

 
  const navigate = useNavigate();

  const mentor =()=>{
    navigate('/user/Mentor')
  }
  const student =()=>{
    navigate('/user/Student')
  }
  
  return (
    <div className={login.main}>
        <div className={login.left}>
          <div className={login.logo}>
            <img src={logo} alt='logo'/>
          </div>
        </div>
        <div className={login.right}>
          <div className={login.title}><h1>Mentrix</h1></div>
          <div className={login.selection}>
            <div className={login.text}><p>Are you a</p></div>
            <div className={login.button}><button onClick={student}>Student</button></div>
            <div className={login.text}><p>or</p></div>
            <div className={login.button}><button onClick={mentor}>Mentor</button></div>
          </div>
        </div>
    </div>
  )
}
