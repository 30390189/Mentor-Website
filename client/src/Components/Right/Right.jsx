import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import right from './Right.module.scss'
import {useNavigate} from 'react-router-dom'
function Right() {
  const nav = useNavigate();
  return (
    <div>
        <div className={right.main} >
            <button className={right.btnbox} onClick={()=>nav('/requestmentor')}>
                <PersonIcon/> 
                <span>Connect with mentor</span>
            </button>
        </div>
    </div>
  )
}

export default Right