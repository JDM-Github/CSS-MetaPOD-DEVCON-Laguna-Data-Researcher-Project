import React from 'react'
import userIcon from '../../Assets/userIcon.png';
import Notification from './Notification';

const UserIcon = () => {
  return (
    <div className='userIcon'>
        <img src={userIcon} alt="" />
        <Notification />
    </div>
  )
}

export default UserIcon