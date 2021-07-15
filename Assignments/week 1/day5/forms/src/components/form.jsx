import React, { useState } from  'react';
    
    

const UserForm = (props) => {
    const [value, setValue] = useState({
        firstName: "Default",
        lastName: "Default",
        email: "Default",
        password: "Default",
        confirmPassword: "Default",
    })
    
    const createUser = (e) => {
        e.preventDefault();
        setValue({...value, [e.target.name]: e.target.value})
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={ (e) => createUser(e) } />
                </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={ (e) => createUser(e) } />
                </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" name="email" onChange={ (e) => createUser(e) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={ (e) => createUser(e) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="confirmPassword" onChange={ (e) => createUser(e) } />
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
