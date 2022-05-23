import React from 'react'
import Copyright from './Copyright'
import Sitemap from './Sitemap'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className='shadow-sm border-b bg-gray-800 relative pt-12 mt-10'>
        <svg className='absolute top-[-1rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L17.1,80C34.3,96,69,128,103,122.7C137.1,117,171,75,206,64C240,53,274,75,309,90.7C342.9,107,377,117,411,101.3C445.7,85,480,43,514,69.3C548.6,96,583,192,617,218.7C651.4,245,686,203,720,192C754.3,181,789,203,823,218.7C857.1,235,891,245,926,208C960,171,994,85,1029,80C1062.9,75,1097,149,1131,192C1165.7,235,1200,245,1234,234.7C1268.6,224,1303,192,1337,186.7C1371.4,181,1406,203,1423,213.3L1440,224L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path></svg>
        <div className='flex flex-col justify-between max-w-6xl mx-5 xl:mx-auto'>
            <SocialMedia />
            <Sitemap />
            <Copyright/>
        </div>

    </footer>
  )
}




export default Footer