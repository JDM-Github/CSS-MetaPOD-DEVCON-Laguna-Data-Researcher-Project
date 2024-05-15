import {React, useState} from 'react'
import './OrgRegistration.css'
import FormInput from '../FormInput' 
import Ddown from './Ddown';

const OrgRegistration = () => {
    const [values, setValues] = useState({
        industry:'',
        companySz:'',
        hqLocation:'',
        webURL:'',
        contactPerson:'',
        contactNumber:'',
        // billingInfo:'',
        // companyLogo:'',
        companyDesc:''
    });

    const inputs = [
        {
            id:1,
            name: 'industry',
            type: 'text',
            placeholder: 'Industry',
            label: 'Industry'
        },
        {
            id:2,
            name: 'company size',
            type: 'text',
            placeholder: 'Company Size',
            label: 'Company Size'
        },
        {
            id:3,
            name: 'headquarters location',
            type: 'text',
            placeholder: 'Headquarters Location',
            label: 'Headquarters Location'
        },
        {
            id:4,
            name: 'website url',
            type: 'url',
            placeholder: 'https://example.com',
            label: 'Website Url (if applicable)'
        },
        {
            id:5,
            name: 'contact person',
            type: 'text',
            placeholder: 'Contact Person',
            label: 'Contact Person'
        },
        {
            id:6,
            name: 'contact phone number',
            type: 'text',
            placeholder: 'Contact Phone Number',
            label: 'Contact Phone Number'
        }
        // {
        //     id:7,
        //     name: 'industry'
        //     type: 'text',
        //     placeholder: 'Industry'
        //     label: 'Industry'
        // }
        // {
        //     id:8,
        //     name: 'industry'
        //     type: 'text',
        //     placeholder: 'Industry'
        //     label: 'Industry'
        // }
        // {
        //     id:9,
        //     name: 'company description',
        //     type: 'text',
        //     placeholder: 'Company Description',
        //     label: 'Company Description'
        // }
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value });
    }

    return (
        <div className='mainContainer'>
            <form onSubmit={handleSubmit}>
                <h1>Organization Registration</h1>
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
}

export default OrgRegistration