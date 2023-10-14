import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import right from './Right.module.scss'
function Right() {
  return (
    <div>
        <div className={right.main} >
            <button className={right.btnbox}>
                <PersonIcon/> 
                <span>Connect with mentor</span>
            </button>
        </div>
    </div>
  )
}

export default Right