import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserSignup from '../LoginSignup/UserSignup.jsx';
import Welcome from '../LoginSignup/Welcome.jsx';
import ChoiceMessage from '../LoginSignup/ChoiceMessage.jsx';
import SignupOptions from '../LoginSignup/SignupOptions.jsx';
import '../LoginSignup/LoginSignupPage.css'


const LoginSignupPage = () => {

  const [showUserSignup, setShowUserSignup] = useState(false);
  const [signupType, setSignupType] = useState("");
  const [slideDirection, setSlideDirection] = useState('');

  const handleSignupClick = (signupType) => {
		setSignupType(signupType);
		setShowUserSignup(true);
	};

  return (
    <div className='mainContainer'>
      {!showUserSignup && (
			<>
			<Welcome />
			<ChoiceMessage />
			<SignupOptions onSignupClick={handleSignupClick} />
			</>
		)}
		{showUserSignup && <UserSignup setShowUserSignup={setShowUserSignup} signupType={signupType} />}
    </div>
  )
}

export default LoginSignupPage