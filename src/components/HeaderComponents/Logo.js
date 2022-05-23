import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Logo = () => {
  return (
    <div className='lg:inline-grid w-16 h-16 cursor-pointer'>
        <Link to="/">
            <StaticImage src='../../images/logo/logo2.jpg'
                className=''
                alt='Logo Travel Y Tour'
            />
        </Link>
    </div>
  )
}

export default Logo