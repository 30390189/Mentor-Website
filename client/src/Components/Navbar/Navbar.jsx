import React from 'react'
import nav from './Navbar.module.scss'
import logo from '../../files/logo/fedlogo.png'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import profile from '../../files/Images/person.jpg'
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom"

function Navbar() {
  const navgiate = useNavigate();
  const logout =()=>{
    navgiate('/login')
  }
  return (
    <div>
        <div className={nav.navbar}>
            <div className={nav.first}>
               <img src={logo} alt='logo'className={nav.pp}/>
                <div ><span className={nav.textlogo}>x MENTRIX</span></div>
                </div>
            <div className={nav.middle}>
              <input type='text' className={nav.search} />
              <div className={nav.searchlogo}><SearchIcon fontSize='medium'/></div>
            </div>
            <div className={nav.last}>
                <div><HomeIcon fontSize='large' sx={{color:"white"}}/></div>
               <div> <MailIcon fontSize='large' sx={{color:"white"}}/></div>
                <div className={nav.img}><img src={profile} alt='profile'/></div>
                <button className={nav.logoutbtn} onClick={logout}>Logout</button>
            </div>
        </div>
        
    </div>  )
}

export default Navbar