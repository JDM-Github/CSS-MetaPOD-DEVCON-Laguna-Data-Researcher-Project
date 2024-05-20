import React from 'react'
import third from '../../../Assets/third.png'
import bronze from '../../../Assets/bronze.png'

const Third = () => {
  return (
    <div className='third'>
        <img className='bronze' src={bronze} alt="" />
        <img src={third} alt="" />
        <text className='thirdText'>Tanim Tanim</text>
    </div>
  )
}

export default Third