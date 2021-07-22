import React, { useState } from "react"
import axios from "axios"

const CreateProduct = props => {
    const {submitState, setSubmitState} = props
    const [validState, setValidState] = useState({})

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
        axios.post("http://localhost:8000/api/product", formState)
            .then(res => {
                setFormState({
                    title: "",
                    price: 0,
                    description: ""
                })
                setSubmitState(!submitState)
            })
            .catch(err => console.log(err))
    }


    return(
        <div>
            <h1>Create Product</h1>
            <form onSubmit={submitHandler}>
                <p>
                    Title:
                    <input type="text" name="title" id="" value={formState.title} onChange={changeHandler}></input>
                </p>
                <p>
                    Price:
                    <input type="number" name="price" id="" value={formState.price} onChange={changeHandler}></input>
                </p>
                <p>
                    Description:
                    <input type="text" name="description" id="" value={formState.description} onChange={changeHandler}></input>
                </p> 
                <button type="submit">Create</button>
            </form>
        </div>
    )
}
export default CreateProduct;