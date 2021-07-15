import React, {useState} from 'react'
import Box from './box';
import boxList from './box'

const MessageForm = (props) => {
    const [value, setValue] = useState({
        color: "",
    })

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setValue({...value, [e.target.name]: e.target.value})
        // value.color 
        //what should we do with the message
    };

    const box = {
        height: '30px',
        width: '30px',
        background: "{value.color}"
        
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Color</label>
                <input type="text" name="color" onChange= { handleChange } />
                <input type="submit" value="OK"></input>
                <div style={ box }></div>
            </form>
            <div>
                <p>Color: {value.color}</p>
            </div>
            
            
        </div>
    )
}

export default MessageForm;