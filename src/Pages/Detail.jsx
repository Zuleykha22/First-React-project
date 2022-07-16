import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function Detail() {
    const { id } = useParams()
    const [product, setProduct] = useState([])


    const getProduct = () =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json()).then(data => setProduct(data))
    }

    useEffect(()=>{
        getProduct()
    },[])
    return (
        <div>
            <h1>{product.title}</h1>
            <h1>{product.category}</h1>
            {/* <img src={product.image} alt=''/> */}

            <h4>{product.rating && product.rating.rate}</h4>
            <h4>{product.rating && product.rating.count}</h4>
        </div>
    )
}

export default Detail