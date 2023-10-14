import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import home from './Homepage.module.scss'
import Homepageleft from '../../Components/Left/Homepageleft'
import Right from '../../Components/Right/Right'
import Main from '../../Components/Main/Main'

function Homepage() {
  return (
    <div className={home.main}>
      <div className={home.navbar}><Navbar/></div>
      <div className={home.body}>
        <div className={home.left}><Homepageleft/></div>
        <div className={home.mid}><Main/></div>
        <div className={home.right}><Right/></div>

      </div>
      <div></div>
        
    </div>
  )
}

export default Homepage