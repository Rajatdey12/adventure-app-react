import React from 'react'
import { Link } from 'react-router-dom'
import './Trailer.css'
import Footer from '../../footer-component/Footer'

function Trailer() {
    return (
        <>
            <div className='trailer-container'>
                <video className='tailer-video' src='/videos/video-3.mp4' autoPlay loop muted />
                <h1>Witness the true happiness Just Starting at Rs 1999/- only.</h1>
                <p>
                    Spread across 1.2 acres of land with lots of fun activities just waiting for you.
                    So what are you waiting for, go and <Link to='/Sign-up'>ENROLL</Link> Today.
                </p>
            </div>
            <Footer
                description={'We are here to help you with your adventure needs. Contact us for more information. 000-888-666-444'}
            />
        </>
    )
}

export default Trailer
