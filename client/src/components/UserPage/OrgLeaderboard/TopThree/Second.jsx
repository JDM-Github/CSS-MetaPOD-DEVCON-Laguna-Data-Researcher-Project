import React from 'react'
import second from '../../../Assets/second.png'
import silver from '../../../Assets/silver.png'

const Second = () => {
  return (
    <div className='second'>
        <img className='silver' src={silver} alt="" />
        <img src={second} alt="" />
        <text className='secondText'>Samahan ng masisipag</text>
    </div>
  )
}

export default Second