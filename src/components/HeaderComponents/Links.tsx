import React from 'react'
import { Link } from "gatsby"

const Links = () => {
  return (
    <>
        <Link to="/about">
            <button 
                className='navLinks'
            >
                About Us
            </button> 
        </Link>
        <Link to="/fishing">
            <button 
                className='navLinks'
            >
                Fishing
            </button> 
        </Link>
        <Link to="/saona">
            <button 
                className='navLinks'
            >
                Saona
            </button> 
        </Link>
        <Link to="/contact">
            <button 
                className='navLinks'
            >
                Contact Us
            </button> 
        </Link>
    </>
  )
}

export default Links