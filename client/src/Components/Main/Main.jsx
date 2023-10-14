import React from 'react'
import main from './Main.module.scss'
import s from '../../files/Images/1.jpg'
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
                    <span className={main.name}>Inajic Baldwin</span>
                    <span className={main.time}>Posted 5 min ago</span>
                </div>
            </div>
            <div className={main.description}>Can someone help me to solve this shit</div>
            <div className={main.image}>
                <img src='' alt='userpost'/>
            </div>
            <div className={main.btns}></div>

        </section>
    </div>
  )
}

export default Main