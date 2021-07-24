import React, {useState, useEffect} from "react"
import axios from "axios"
import { navigate, Link } from "@reach/router"

const EditProduct = props => {
    const {id} = props

    const [formState, setFormState] = useState({
        title: "",
        price: 0,
        description: ""
    })
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setFormState(res.data))
            .catch(err => console.log(err))
    }, [])
    const changeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name] : event.target.value
    })
    }   

    const submitHandler = event => {
        event.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, formState)
            .then(res => {
                navigate(`/api/product/${id}`)
            })
            .catch(err => console.log(err))
    }

    return(
        <div> 
            <h1>Edit Product</h1>
            <form onSubmit={submitHandler} >
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
                <Link to="/"><button>Home</button></Link>
                <button type="submit">Update</button>   
            </form>
        </div>
    )
}
export default EditProduct;