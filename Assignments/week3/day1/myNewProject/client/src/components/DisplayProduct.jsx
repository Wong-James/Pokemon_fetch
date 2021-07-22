import React, {useState, useEffect} from "react"
import { Link } from "@reach/router"
import axios from "axios"


const DisplayProduct = props => {
    const {submitState} = props
    const [productState, setProductState] = useState([])

    useEffect(() =>  {
        axios.get("http://localhost:8000/api/product/display")
            .then(res => setProductState(res.data.allProducts))
            .catch(err => console.log(err))
    },[submitState])

    return(
        <div>
            <h1>All Products</h1>
            {
                productState.map((product, i) =>{
                    return(
                        <div key={i}>
                            <Link to={`/api/product/${product._id}`}> { product.title } </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DisplayProduct