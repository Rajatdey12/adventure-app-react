import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer(props) {
  return (
    <>
     <footer className="footer">
      <div className="footer-content">
        <p>{props.description}</p>
        <h4>{props.warning}</h4>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
            <p>&copy; {new Date().getFullYear()} RD ADVENTURES. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
