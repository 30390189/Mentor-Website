import React from 'react'
import Mentor_login from "./Mentor.module.scss"
import logo from '../files/logo/fedlogo.png';


export default function Mentorlogin() {
  return (
    <div className={Mentor_login.main}>
    <div className={Mentor_login.left}>
      <div className={Mentor_login.logo}>
        <img src={logo} alt='logo'/>
      </div>
    </div>
    <div className={Mentor_login.right}>
      <div className={Mentor_login.title}><h1>Mentrix</h1></div>
      <div className={Mentor_login.selection}>
      </div>
    </div>
</div>  )
}
