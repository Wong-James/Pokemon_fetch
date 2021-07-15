import React, { useState } from  'react';
    
    

const UserForm = (props) => {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [validState, setValidState] = useState({
        firstName: false,
        lastName: false,
        email: false ,
        password: false,
        confirmPassword: false,
    });
    
    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(value.firstName.length < 3 && value.firstName.length > 0) {
            var firstName = true;
        }
        if(value.lastName.length < 3 && value.lastName.length > 0) {
            var lastName = true;
        }
        if(value.email.length < 3 && value.email.length > 0) {
            var email = true;
        }
        if(value.password.length < 8 && value.password.length > 0) {
            var password = true;
        }
        if(value.confirmPassword !== value.password) {
            var confirmPassword = true;
        }
        setValidState({
            ...validState,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        })
    }
    return(
    <div>
        <form onSubmit={ handleSubmit }>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={ handleChange } />
                {
                    (validState.firstName) ? <p>Must be at least 3 characters</p> : null
                }
                </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={ handleChange } />
                {
                    (validState.lastName) ? <p>Must be at least 3 characters</p> : null
                }
                </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" name="email" onChange={ handleChange } />
                {
                    (validState.email) ? <p>Must be at least 3 characters</p> : null
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={ handleChange } />
                {
                    (validState.password) ? <p>Must be at least 8 characters</p> : null
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="confirmPassword" onChange={ handleChange } />
                {
                    (validState.confirmPassword) ? <p>Must Match</p> : null
                }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>First Name: {value.firstName}</p>
                <p>Last Name: {value.lastName}</p>
                <p>Email Address: {value.email}</p>
                <p>Password: {value.password}</p>
                <p>Confirm Password: {value.confirmPassword}</p>
            </div>
    </div>
    );
};

export default UserForm;