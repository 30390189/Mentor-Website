import React from 'react'
import profile from '../../files/Images/person.jpg'
import left from './left.module.scss'

function Homepageleft() {
  return (
    <div className={left.main}>
      <div className={left.pp}><img src={profile} alt='profile'/></div>
      <div className={left.name}>Jackson Kaida</div>
    </div>
  )
}

export default Homepageleft