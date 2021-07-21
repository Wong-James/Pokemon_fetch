import React, { useState } from "react"
import axios from "axios"

const CreateProduct = props => {
    const [formState, setFormState] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const changeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name] : event.target.value
        })
    }

    const submitHandler = event => {
        event.preventDefault()
        axios.post("http://localhost:8000", formState)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return(
        <div>
            <h1>Create Product</h1>
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="title" id="" onChange={changeHandler}></input>
                </p>
                <p>
                    Price:
                    <input type="number" name="price" id="" onChange={changeHandler}></input>
                </p>
                <p>
                    Description:
                    <input type="text" name="description" id="" onChange={changeHandler}></input>
                </p> 
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default CreateProduct;