import React, {useState, useEffect} from "react"
import { Link } from "@reach/router"
import axios from "axios"


const DisplayProduct = props => {
    const {submitState, setSubmitState} = props
    const [productState, setProductState] = useState([])

    useEffect(() =>  {
        axios.get("http://localhost:8000/api/product/display")
            .then(res => setProductState(res.data.allProducts))
            .catch(err => console.log(err))
    },[submitState])
    
    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res=> setSubmitState(!submitState))
        .catch(err=> console.log(err))
        console.log(id)
    }

    return(
        <div>
            <h1>All Products</h1>
            {
                productState.map((product, i) =>{
                    return(
                        <div key={i}>
                            <Link to={`/api/product/${product._id}`}> { product.title } </Link>
                            <Link to={`/api/product/${product._id}/edit`}><button>Edit</button></Link>
                            <button onClick={() => deleteHandler(product._id)}>Delete</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DisplayProduct