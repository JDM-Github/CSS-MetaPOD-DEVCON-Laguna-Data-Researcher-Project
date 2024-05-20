import React from 'react'

import first from '../../../Assets/first.png';
import gold from '../../../Assets/gold.png'

const First = () => {
  return (
    <div className='first'>
      <img className='gold' src={gold} alt="" />
      <img src={first} alt="" />
      <text className='firstText'>City Plastic</text>
    </div>
  )
}

export default First