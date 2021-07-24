import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from "@reach/router"

const DisplayOneProduct = props => {

    const {id} = props

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h1>Product</h1>
            <h2>{product.title}</h2>
            <h2>Price: ${product.price}</h2>
            <h2>Description:</h2>
            <h3>{product.description}</h3>
            <Link to="/"><button>Home</button></Link>
            <Link to={`/api/product/${id}/edit`}><button>Edit</button></Link>
        </div>
    )
}

export default DisplayOneProduct;