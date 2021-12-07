import React from 'react'
import Slideshow from './Slideshow'

export const Home = ({ lang }) => {
    return (
        <>
            <h1>{lang.homepage}</h1>
            <Slideshow />
        </>
    )
}
