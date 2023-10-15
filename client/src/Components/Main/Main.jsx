import React from 'react'
import main from './Main.module.scss'
import demo from '../../files/demo'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'


function Main() {
    const nav = useNavigate();
    const login = useSelector((state)=>state.loginstate)
    
    if(!login){
        nav('/login')
    }

  return (
    <div className={main.main}>
        <div className={main.write}>
            <div className={main.write_area}>
                    asdasdsfsdfsdf
            </div>
            <div className={main.btnbox}>
                <button className={main.postbtn}>Post</button>
            </div>
        </div>
        {demo.filter((item)=>{
            return item.user ==="student";
        }
        ).map((data)=>(
            <section className={main.postbox}>
            <div className={main.userinfo}>
                <div className={main.userimgbox}><img src={data.profilepp} alt='userimg'/></div>
                <div className={main.username}>
                    <span className={main.name}>{data.name}</span>
                    <span className={main.time}>Posted {data.posted}</span>
                </div>
            </div>
            <div className={main.description}>{data.description}</div>
            {data.problemimage === "" ? <></>:
            <>
            <div className={main.image}>
                <img src={data.problemimage} alt='userpost'/>
            </div>
            <hr className={main.line}/>
            </>

            }

            <div className={main.btns}>
                <div><button className={main.btn}>Help</button></div>
                <div><button className={main.btn}> Share</button></div>

            </div>

        </section>

        ))}
        
    </div>
  )
}

export default Main