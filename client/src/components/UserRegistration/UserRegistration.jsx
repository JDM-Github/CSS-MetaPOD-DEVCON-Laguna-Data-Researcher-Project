import React, { useState } from 'react';
import './UserRegistration.css';
import FormInput from '../FormInput.jsx'

const UserRegistration = () => {
    const [values, setValues] = useState({
        name: '',
        phoneNumber: '',
        dateOfBirth: '',
        location: '',
        languagePreferences: ''
    });

    const inputs = [
        {
            id: 1,
            name: 'name',
            type: 'text',
            placeholder: 'Full Name',
            label: 'Full Name'
        },
        {
            id: 2,
            name: 'phoneNumber',
            type: 'text',
            placeholder: 'Phone Number',
            label: 'Phone Number'
        },
        {
            id: 3,
            name: 'dateOfBirth',
            type: 'date',
            placeholder: 'Date of Birth',
            label: 'Date of Birth'
        },
        {
            id: 4,
            name: 'location',
            type: 'text',
            placeholder: 'Location',
            label: 'Location'
        },
        {
            id: 5,
            name: 'languagePreferences',
            type: 'text',
            placeholder: 'Language Preferences',
            label: 'Language Preferences'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values);

    return (
        <div className='mainContainer'>
            <form onSubmit={handleSubmit}>
                <h1>User Registration</h1>
                {inputs.map((input) => (
                    <FormInput 
                        key={input.id} 
                        {...input} 
                        value={values[input.name]} 
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UserRegistration;
