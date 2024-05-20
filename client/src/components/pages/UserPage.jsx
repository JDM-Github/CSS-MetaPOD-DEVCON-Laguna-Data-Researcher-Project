import React from 'react'
import '../UserPage/userPage.css'

import UserHeader from '../UserPage/UserHeader.jsx';
import UserWallet from '../UserPage/UserWallet.jsx';
import UserInvestment from '../UserPage/UserInvestment.jsx';
import ProjectActivities from '../UserPage/ProjectActivities.jsx';
import OrgLeaderboard from '../UserPage/OrgLeaderboard.jsx';

const UserPage = () => {
  return (
    <div className='userPageContainer'>
        <UserHeader />
        <UserWallet />
        <UserInvestment />
        <ProjectActivities />
        <OrgLeaderboard />
    </div>
  )
}

export default UserPage