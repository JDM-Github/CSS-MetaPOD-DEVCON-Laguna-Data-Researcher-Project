import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './WAISMainApplication.css';

// Import component Example
import LoginSignupPage from './components/pages/LoginSignupPage.jsx';
import OrgRegistrationPage from './components/pages/OrgRegistrationPage.jsx';
import UserRegistrationPage from './components/pages/UserRegistrationPage.jsx';
import UserPage from './components/pages/UserPage.jsx';

// Use the function I create for the handling  Request
import handleRequest from './functions/handleRequest'


function WAISMainApplication()
{
	// Post: if you want to submit something in database,
	// example create new user, you will pass information
	// Example is this
	// handleRequest('post', '/api/create-user', {"name": "John Dave", "email": "jdpega@gmail.com"})

	// Get: if you want to retrieve something in database
	// Example you want to use the data it will retrieve.
	// You can also pass optional param, if you want something using that param
	// Example is this
	// handleRequest('get', 'api/get-user', {"optional": "params"})


	// How to retrieve data from database we will use.
	// First use the useState of react
	const [backendData, setBackendData] = useState([{}]);

	// Use effect, to run only once
	useEffect(() => {
		// Use the function I create
		handleRequest('get', '/api?id=1')
		.then((result) => {
			setBackendData(result);
		});
	}, []);

	
	return (
		<Router>
      		<Routes>
				<Route path="/" element={<UserPage />} />
        		{/* <Route path="/" element={<LoginSignupPage />} />
        		<Route path="/OrgRegistrationPage" element={<OrgRegistrationPage />} />
        		<Route path="/UserRegistrationPage" element={<UserRegistrationPage />} /> */}
      		</Routes>
    </Router>
	);
}

export default WAISMainApplication;