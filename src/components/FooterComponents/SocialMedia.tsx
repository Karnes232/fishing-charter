import React from 'react'
import { Link } from "gatsby"
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='border-b border-gray-500 md:border-none'>
            <div className='flex py-4 justify-between mx-8 md:max-w-md md:mx-auto'>
                <Link to="https://www.facebook.com/">
                    <FaFacebookF 
                        className='footerIcons'
                    />
                </Link>
                <Link to="https://twitter.com/">
                    <FaTwitter 
                        className='footerIcons'
                    />   
                </Link>
                <Link to='https://www.pinterest.com/'>
                    <FaPinterestP 
                        className='footerIcons'
                    />      
                </Link>
                <Link to='https://instagram.com/'>
                    <FaInstagram 
                        className='footerIcons'
                    />  
                </Link>
                <Link to='https://youtube.com/'>
                    <FaYoutube 
                        className='footerIcons'
                    />
                </Link>
                <Link to='https://www.tiktok.com/'>
                    <FaTiktok 
                        className='footerIcons'
                    />  
                </Link>
            </div>
        </div>
    )
}

export default SocialMedia