import React from 'react'
import home from './Homepage.module.scss'
import logo from '../../files/logo/fedlogo.png'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import profile from '../../files/Images/person.jpg'

function Homepage() {
  return (
    <div>
        <div className={home.navbar}>
            <div className={home.first}>
               <img src={logo} alt='logo'className={home.pp}/>
                <div ><span className={home.textlogo}>x MENTRIX</span></div>
                </div>
            <div className={home.middle}><input type='text' className={home.search} /></div>
            <div className={home.last}>
                <div><HomeIcon fontSize='large' sx={{color:"white"}}/></div>
               <div> <MailIcon fontSize='large' sx={{color:"white"}}/></div>
                <div className={home.img}><img src={profile} alt='profile'/></div>
                <div><button className={home.buttton}>Logout</button></div>
            </div>
        </div>
        <div className={home.body}>
                
        </div>
    </div>
  )
}

export default Homepage