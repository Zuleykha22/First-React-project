import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
function Slider({categories}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(response => response.json())
            .then(response => {
                setPosts(response)
            })
    }, []);


    return (
        <>
            <h1>{categories}</h1>
        
            <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={50}
            autoplay={{
                delay: 1000
            }}
        >
            {
                posts.filter(x=>x.category === categories).map(a => (
                    <SwiperSlide key={a.id}>
                        <div className="col-lg-12">
                            <img height={400} src={a.image} alt='' />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>

        
        </>
       
    )
}

export default Slider