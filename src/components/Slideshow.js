import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { Card } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Slideshow = () => {

    const [slides, setSlides] = useState([])

    useEffect(() => {
        const fetchSlides = async () => {
            const headers = { 'Content-Type': 'application/json' }
            const res = await fetch('http://localhost:5000/slides', headers)
            //const res = await fetch('https://angry-rosalind-cb7128.netlify.app:5000/slides', headers)
            const data = await res.json()
            setSlides(await data)
        }
        fetchSlides()
    }, [])

    const settings = {
        autoplay: true,
        dots: true,
        fade: true,
        infinte: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: 'slides'
    }

    return (
        <Slider {...settings}>
            {slides.map((slide) => {
                return(
                    <a key={slide.id} href={slide.link} target="_blank" rel="noreferrer">
                        <Card.Img src={'/images/' + slide.photo} />
                        <p>{slide.text}</p>
                    </a>
                )
            })}
        </Slider>
    )
}

export default Slideshow
