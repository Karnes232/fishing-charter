import React from 'react'
import LazyHero from 'react-lazy-hero';
import photo from '../../images/fish2.jpg'

const Hero = () => {
  return (
    <div className='relative'>
        <LazyHero 
            imageSrc={photo}
            color="#000"
            opacity={0.3}
            minHeight="16rem"
            isCentered={false}
            className=''
        >
          <div className='w-screen'>
            <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
              <h1 className='mt-20 md:mt-12 text-white font-sans font-semibold w-48 text-3xl'>Get Ready for Adventure</h1>

            </div>
          </div>
            
        </LazyHero>
        <svg className='hero_svg absolute top-[11rem] sm:top-[13rem] md:top-[11rem] lg:top-[12rem] xl:top-[15rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,64L17.1,80C34.3,96,69,128,103,122.7C137.1,117,171,75,206,64C240,53,274,75,309,90.7C342.9,107,377,117,411,101.3C445.7,85,480,43,514,69.3C548.6,96,583,192,617,218.7C651.4,245,686,203,720,192C754.3,181,789,203,823,218.7C857.1,235,891,245,926,208C960,171,994,85,1029,80C1062.9,75,1097,149,1131,192C1165.7,235,1200,245,1234,234.7C1268.6,224,1303,192,1337,186.7C1371.4,181,1406,203,1423,213.3L1440,224L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path>
        </svg>
    </div>
  )
}

export default Hero