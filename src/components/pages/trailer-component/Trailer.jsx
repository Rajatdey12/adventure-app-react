import React from 'react'
import { Link } from 'react-router-dom'
import './Trailer.css'

function Trailer() {
    return (
        <>
            <div className='trailer-container'>
                <video className='tailer-video' src='/videos/video-3.mp4' autoPlay loop muted />
                <h1>Witness the true happiness Just Starting at Rs 199/- only.</h1>
                <p>
                    Spread across 1.2 acres of land just waiting for you.
                    So what are you waiting for. Go to <Link to='/services'>services</Link> and enroll Today.
                </p>
            </div>
        </>
    )
}

export default Trailer
