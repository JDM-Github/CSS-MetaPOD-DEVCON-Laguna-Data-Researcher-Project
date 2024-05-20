import React from 'react'
import './userHeader.css'
import LogoContainer from '../UserPage/Header/LogoContainer.jsx';
import UserIcon from '../UserPage/Header/UserIcon.jsx';
import ToggleButton from '../UserPage/Header/ToggleButton.jsx';
import HeaderText from '../UserPage/Header/HeaderText.jsx';
import Notification from './Header/Notification.jsx';

const UserHeader = () => {
  return (
    <div className='headerContainer'>
        <LogoContainer />
        <HeaderText />
        <ToggleButton />
        <UserIcon />
    </div>
  )
}

export default UserHeader