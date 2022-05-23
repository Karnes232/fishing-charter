import React from 'react'
import Composition from './Composition'
import image1 from '../../images/about/image1.jpg'
import image2 from '../../images/about/image2.jpg'
import image3 from '../../images/about/image3.jpg'

const AboutUs = () => {
  return (
    <section className='mt-10 2xl:mt-28'>
        <div className='flex justify-center'>
            <h1 className='font-semibold text-2xl md:text-3xl text-gray-800'>Fishing Charters</h1>
        </div>

        <div className='flex flex-col justify-between px-8 mt-4'>
            <div className='flex flex-col'>
                <h2 className='text text-gray-800 font-semibold '>Lorem ipsum dolor sit.</h2>
                <p className='my-3 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam enim quia cum dolorum voluptates nisi quos porro molestiae nesciunt deserunt ipsam quas a nemo blanditiis, neque quod ex architecto voluptatem. Expedita perferendis accusantium corporis molestiae?</p>

                <h3 className='text text-gray-800 font-semibold '>Lorem ipsum dolor sit amet.</h3>
                <p className='my-3 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque natus itaque. Fugiat deleniti pariatur fuga delectus sed quaerat, nisi, neque voluptas placeat, iure mollitia. Tempora, nemo! Necessitatibus unde, sit numquam ut commodi beatae officiis voluptatem ullam autem quia iure.</p>
            </div>
            <div className='mt-5'>
                <Composition 
                    image1={image1} 
                    image2={image2} 
                    image3={image3} 
                />
            </div>
        </div>

        <div className='flex flex-col justify-between px-8'>
            <div className='flex flex-col'>
                <h2 className='text text-gray-800 font-semibold '>Lorem ipsum dolor sit.</h2>
                <p className='my-3 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam enim quia cum dolorum voluptates nisi quos porro molestiae nesciunt deserunt ipsam quas a nemo blanditiis, neque quod ex architecto voluptatem. Expedita perferendis accusantium corporis molestiae?</p>

                <h3 className='text text-gray-800 font-semibold '>Lorem ipsum dolor sit amet.</h3>
                <p className='my-3 text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque natus itaque. Fugiat deleniti pariatur fuga delectus sed quaerat, nisi, neque voluptas placeat, iure mollitia. Tempora, nemo! Necessitatibus unde, sit numquam ut commodi beatae officiis voluptatem ullam autem quia iure.</p>
            </div>
            <div className='mt-5'>
                <Composition 
                    image1={image1} 
                    image2={image2} 
                    image3={image3} 
                />
            </div>
        </div>
    </section>
  )
}

export default AboutUs