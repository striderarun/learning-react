// You have a registration form where user can input first name, last name and email. 
// The component needs to keep track of what the user typed in the form and update the page.
// As the user keeps typing, the page should be updated with the values that have been typed.

import { useState } from 'react'; 

const RegistrationForm = () => { 

    // Using a form object to store the state of all three text input field values
    const [form, setForm] = useState({ 
        firstName: 'Luke', 
        lastName: 'Jones', 
        email: 'lukeJones@sculpture.com', 
    }); 

    return ( 
        <div> 
            <label> 
                First name: 
                <input 
                value={form.firstName} 
                onChange={e => { 
                    setForm({ 
                        firstName: e.target.value,
                        lastName: form.lastName,
                        email: form.email 
                    }); 
                }} 
                /> 
            </label> 
            <label> 
                Last name: 
                <input 
                value={form.lastName} 
                onChange={e => { 
                    setForm({ 
                        // Notice the use of spread operator here to keep the first name and email unchanged in the state object
                        // Instead of manually keeping the values for first name and email unchanged when updating the state object
                        ...form,
                        lastName: e.target.value 
                    }); 
                }} 
                /> 
            </label> 
            <label> 
                Email: 
                <input 
                value={form.email} 
                onChange={e => { 
                    setForm({ 
                        firstName: form.firstName,
                        lastName: form.lastName,
                        email: e.target.value 
                    }); 
                }} 
                /> 
            </label> 
            <p> 
                {form.firstName}{' '} 
                {form.lastName}{' '} 
                ({form.email})
            </p> 
        </div> 
    ); 
} 

export default RegistrationForm;

// Notes about this component
// Notice the use of ...form when updating state in the change handler
// This is the Spread operator in ES6 which is commonly used to make shallow copies of JavaScript objects.
