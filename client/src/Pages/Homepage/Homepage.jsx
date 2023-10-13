import React from 'react'
import home from './Homepage.module.scss'
import logo from '../../files/logo/fedlogo.png'
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import profile from '../../files/Images/person.jpg'

function Homepage() {
  return (
    <div>
        <div className={home.navbar}>
            <div className={home.first}>
               <img src={logo} alt='logo'className={home.pp}/>
                <div className={home.textlogo}><span >x MENTRIX</span></div>
                </div>
            <div className={home.middle}><input type='text'/></div>
            <div className={home.last}>
                <HomeIcon fontSize='large' sx={{color:"white"}}/>
                <CommentIcon fontSize='large' sx={{color:"white"}}/>
                <div className={home.img}><img src={profile} alt='profile'/></div>
                <button>Logout</button>
            </div>
        </div>
        <div className={home.body}>
                
        </div>
    </div>
  )
}

export default Homepage