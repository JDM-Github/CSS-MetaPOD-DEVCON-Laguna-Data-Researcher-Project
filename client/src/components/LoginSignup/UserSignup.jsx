import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './UserSignup.css'
import email_icon from '../Assets/email.png'
import user_icon from '../Assets/person.png'
import pass_icon from '../Assets/password.png'
import org_icon from '../Assets/org.png'
import confirmpass_icon from '../Assets/confirmpass.png'

const UserSignup = ({ setShowUserSignup, signupType }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [slideRight, setSlideRight] = useState(false);

    const nameIcon = signupType === "Organization" ? org_icon : user_icon;


    const handleGoBack = () => {
        setShowUserSignup(false);
    };

    const handleSignup = () => {
        if (signupType === "Organization") {
            navigate('/OrgRegistrationPage');
        } else {
           navigate('/UserRegistrationPage');
        }
    }

    const handleLoginClick = () => {
        // Slide the container to the right
        setSlideRight(true);
        // Wait for the transition to complete before switching to login
        setTimeout(() => {
            // Handle the switch to the login view
            // For now, you can just log a message
            console.log('Switching to login view...');
        }, 500); // Adjust the timeout to match the CSS transition duration
    };

    return(
        // Main container
        <div className={`container ${slideRight ? 'slide-right' : ''}`}>
            <div className='header'>
            <button className="backButton" onClick={handleGoBack}>
                {slideRight ? 'WAIS' : '←'}
            </button>
            <div className={`text ${slideRight ? 'slide-right' : ''}`}>{slideRight ? 'Login' : 'Sign Up'}</div>
            </div>
            <div className="underlineSymbol">
                <div className='underline'></div>
            </div>

            <div className={`inputs ${slideRight ? 'slide-right' : ''}`}>
                <div className='input'>
                    <img src={nameIcon} alt='#' className={signupType === "Organization" ? 'orgIcon' : 'icon'} />
                    <input 
                        type='text' 
                        placeholder='Username' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {!slideRight && ( 
                    <div className="input">
                        <img src={email_icon} alt="#" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                )}
                <div className='input'>
                    <img src = { pass_icon } alt = '#' />
                    <input
                        type = 'password' 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {!slideRight && (
                    <div className='input'>
                        <img src = { confirmpass_icon } alt = '#' />
                        <input
                            type = 'password' 
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                )}
                
            </div>

            <div className={`submit-container ${slideRight ? 'slide-right' : ''}`}>
                <button className='submit' onClick={handleSignup}>
                    {slideRight ? 'Login' : 'Proceed'}
                </button>
            </div>

            <div className="Login" onClick={slideRight ? handleGoBack : handleLoginClick}>
                {slideRight ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
            </div>
            
        </div>
    )
}

export default UserSignup