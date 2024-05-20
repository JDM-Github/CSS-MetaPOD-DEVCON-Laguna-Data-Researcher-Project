import React from 'react'
import './SignupOptions.css'

const SignupOptions = ({ onSignupClick }) => {
  return (
    <div className='buttons'>
        <button onClick={() => onSignupClick('Solo')}>Solo</button>
        <button onClick={() => onSignupClick('Organization')}>Organization</button>
    </div>
  )
}

export default SignupOptions