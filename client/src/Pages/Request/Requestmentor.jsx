import React from 'react'
import rq from './Requestmentor.module.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Homepageleft from '../../Components/Left/Homepageleft'
import mentordata from './mentordata'
function Requestmentor() {
  return (
    <div className={rq.main}>
      <div className={rq.navbar}><Navbar/></div>
      <div className={rq.body}>
        <div className={rq.left}><Homepageleft/></div>
        <div className={rq.mid}>
                {mentordata.map((data)=>(
                        <div className={rq.box}>
               
                        <div className={rq.firstbox}>
                            <div className={rq.imgbox}><img src={data.profile} alt='ppimage'/></div>
                            <div className={rq.namebox}>
                            <span className={rq.name}>{data.name}</span>
                            <span className={rq.study}>{data.study}</span>
                        </div>
                        </div>
                       
                        <div className={rq.major}>
                            <div className={rq.major_name}>{data.major[0]}</div>
                            <div className={rq.major_name}>{data.major[1]}</div>
                            <div className={rq.major_name}>{data.major[2]}</div>
                            <div className={rq.major_name}>{data.major[3]} </div>
        
                        </div>
                        <div className={rq.btnbox}><button>Request</button></div>
                    </div> 
                ))}
       
        </div>
        <div className={rq.right}></div>

      </div>
      <div></div>
        
    </div>
  )
}

export default Requestmentor