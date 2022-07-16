import React, { useEffect, useState } from 'react'
import Product from '../Components/Product/Product'
import Slider from '../Components/Slider/Slider'

function Home() {
  const [category, setCategory] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products/categories").then(response => response.json())
        .then(response => {
          setCategory(response)
        })
    }, []);
  return (
    <div>
        {
          category.map(cat=>(
            <Slider key={cat} categories={cat}/>
          ))
        }
        <Product />
    </div>
  )
}

export default Home