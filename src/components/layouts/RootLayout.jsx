import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import Slider from '../partials/Slider'

const RootLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Slider />
            {children}
            <Footer />
        </>
    )
}

export default RootLayout