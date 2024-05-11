import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import Test from "./components/Test.tsx"


function App()
{
	const handleSubmit = (link, request) => {
		axios
			.post('http://localhost:5000' + link, request)
			.then((response) => {
				console.log('Response:', response.data);
			})
			.catch((error) => {
				console.log("Error");
			});
	};
	handleSubmit('/api/data', {name: "TEST"});

	const [backendData, setBackendData] = useState([{}]);
	useEffect(() => {
		fetch("/api").then(
			response => response.json()
		).then(
			data => {
				setBackendData(data)
			}
		)
	}, []);


	return (
		<div>HAHA {backendData.users}<Test /><Test /><Test /><Test /><Test /></div>
	);
}

export default App;
