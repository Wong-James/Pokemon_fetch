import React, { useState } from "react"
import { navigate } from "@reach/router"


const HomePage = props => {
    const [formState, setFormState] = useState({
        option: "people",
        id: ""
    });

    const handleOnChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        navigate("/" + formState.option + "/" + formState.id)
    }
    
    return (
        <form onSubmit={handleOnSubmit}>
            <label>Search for:</label>
            <select name="option" value={formState.option} onChange={handleOnChange}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
            </select>
            <label>ID:</label>
            <input name="id" value={formState.id} onChange={handleOnChange}/>
            <button>Search</button> 
        </form> 
    )
}

export default HomePage