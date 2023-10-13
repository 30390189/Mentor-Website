import React from 'react'
import logo from '../../files/logo/fedlogo.png';
import google_logo from '../../files/logo/google.png';
import { useParams,useNavigate } from 'react-router-dom';
import user from './User.module.scss'

function Userlogin() {
  const navigate = useNavigate();
  const {users} = useParams();

  
  const changeuser = ()=>{
    if(users === "Mentor"){
      navigate('/login/Student');
    }
    else{
      navigate('/login/Mentor');
    }
    
  }

  return (
    <div className={user.main}>
    <div className={user.left}>
      <div className={user.logo}>
        <img src={logo} alt='logo'/>
      </div>
    </div>
    <div className={user.right}>
      <div className={user.title}><h1>Mentrix</h1></div>
      <div className={user.selection}>
        <div className={user.text}><p>{users} Login</p></div>
        <div className={user.box}>
          <span>Email or Phone number</span>
          <input type='text' required/>
        </div>
        <div className={user.box}>
          <span>Password</span>
          <input type='password' required/>
        </div>
        <div className={user.box1}>
          <button className={user.loginbtn}>Login</button>
          <p className={user.switch}>Doesn't have account ? Sign up</p>
          <h2>OR</h2>
          <div className={user.signupbtn}>
            <img src={google_logo} alt='googlelogo'/>
            <span>Sign up with google</span>
            </div>
          </div>
          <p className={user.switch} onClick={changeuser}>Switch User</p>

        


      </div>
    </div>
</div>  )
}

export default Userlogin;