import React from 'react'
import './userWallet.css'

import MyWalletText from './Wallet/MyWalletText'
import InvestmentFundsText from './Wallet/InvestmentFundsText'
import Investment from './Wallet/Investment'
import WalletText from './Wallet/WalletText'
import Amount from './Wallet/Amount'
import TopUp from './Wallet/TopUp'
import ProfitText from './Wallet/ProfitText'
import ProfitAmount from './Wallet/ProfitAmount'

const UserWallet = () => {
  return (
    <div className='userWalletContainer'>
        <MyWalletText />
        <InvestmentFundsText />
        <Investment />
        <WalletText />
        <Amount />
        <TopUp />
        <ProfitText />
        <ProfitAmount />
    </div>
  )
}

export default UserWallet