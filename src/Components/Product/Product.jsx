import React, { useEffect, useState } from 'react'
import {Link }from "react-router-dom"

function Product() {
 
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products").then(response => response.json())
        .then(response => {
          setPosts(response)
        })
    }, []);
  
    return (
      <div className="App">
        <div className="container">
              <div className="row">
                {
                  posts.map((post, index) => {
                    return (
                      <div className="databx col-lg-2" key={index}>
                        <div className="name">
                          {post.title}
                        </div>
                        {/* <div className="rating">
                          {post.rating}
                        </div> */}
                        <div className="email">
                          <img className="img-fluid" src={post.image} alt="" />
                        </div>
                        <Link to={`/detail/${post.id}`}>Detail</Link>
                      </div>
                    )
                  })
                }
                <div className="username">
  
                </div>
                <div className="emailaddress">
  
                </div>
              </div>
            </div>
        </div>
    );
}

export default Product