import React from 'react'
import './userInvestment.css'
import MyInvestmentsText from './UserInvestment/MyInvestmentsText'
import Active from './UserInvestment/Active'
import ActiveText from './UserInvestment/ActiveText'
import InvestmentBottomContainer from './UserInvestment/InvestmentBottomContainer'

const UserInvestment = () => {
  return (
    <div className='userInvestment'>
        <MyInvestmentsText />
        <Active />
        <ActiveText />
        <InvestmentBottomContainer />
    </div>
  )
}

export default UserInvestment