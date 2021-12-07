import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

export const Gallery = ({ lang }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch('http://localhost:5000/gallery')
            const data = await res.json()
            setImages(await data)
        }
        fetchImages()
    }, [])

    return (
        <>
            <h1>{lang.gallery}</h1>
            <ImageGallery items={images} />
        </>
    )
}
