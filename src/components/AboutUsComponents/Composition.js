import React from 'react'

const Composition = ({image1, image2, image3}) => {
    return (
        <div class="relative md:flex h-[15vh]">
            <img 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 1"
                class="compositionPhotos left-0 top-0"
                src={image1}
            />
            <img 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 2"
                class="compositionPhotos right-0 top-[.5rem]"
                src={image2}
            />
            <img 
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 3"
                class="compositionPhotos left-1/2 -translate-x-1/2 top-[-1rem] scale-110"
                src={image3}
            />
        </div>
    )
}

export default Composition