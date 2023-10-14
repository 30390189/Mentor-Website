import React from 'react'
import main from './Main.module.scss'
import s from '../../files/Images/1.jpg'
import aa from '../../files/Images/aa.png'
import aaa from '../../files/Images/aaa.png'
import demo from '../../files/demo.json'


function Main() {

    

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
        <section className={main.postbox}>
            <div className={main.userinfo}>
                <div className={main.userimgbox}><img src={s} alt='userimg'/></div>
                <div className={main.username}>
                    <span className={main.name}>{demo.name}</span>
                    <span className={main.time}>Posted 5 min ago</span>
                </div>
            </div>
            <div className={main.description}>Can somasdasdasadadseone help me tadadasdasdadasdasdadadsadadadasdasdo solve this shit</div>
            <div className={main.image}>
                <img src={aa} alt='userpost'/>
            </div>
            <div className={main.btns}>
                <div><button className={main.btn}>Help</button></div>
                <div><button className={main.btn}> Share</button></div>

            </div>

        </section>
    </div>
  )
}

export default Main