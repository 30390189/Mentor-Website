import React from 'react'
import nav from './Navbar.module.scss'
import logo from '../../files/logo/fedlogo.png'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import profile from '../../files/Images/person.jpg'
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../../redux-store/login /loginstate';


function Navbar() {
  const navgiate = useNavigate();
  const dispatch = useDispatch()
  const loo = useSelector((state)=>state.loginstate.value)
  console.log(loo)

  const logouts =()=>{
    dispatch(logout())
  }

 
  return (
    <div>
        <div className={nav.navbar}>
            <div className={nav.first} onClick={()=>navgiate("/")}>
               <img src={logo} alt='logo'className={nav.pp}/>
                <div ><span className={nav.textlogo}>x MENTRIX</span></div>
                </div>
            <div className={nav.middle}>
              <input type='text' className={nav.search} />
              <div className={nav.searchlogo}><SearchIcon fontSize='medium'/></div>
            </div>
            <div className={nav.last}>
                <div><HomeIcon  className={nav.HomeIcon}/></div>
               <div> <MailIcon  className={nav.MailIcon}/></div>
                <div className={nav.img}><img src={profile} alt='profile'/></div>
                <button className={nav.logoutbtn} onClick={logouts}>Logout</button>
            </div>
        </div>
        
    </div>  )
}

export default Navbar