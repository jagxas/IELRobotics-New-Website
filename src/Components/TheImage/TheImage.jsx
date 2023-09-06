import './TheImage.css'
import '../../index.css'

import { useState } from 'react'
import placeholder from '/OtherImages/Loading/load-main.webp'

export const TheImage = (props) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    return (
        <div className="container">
            <div className="image-wrapper">
                <p> {props.text} </p>
                <img 
                    src={imageLoaded ? (window.innerWidth > 500 ? props.source : props.mobile) : placeholder} 
                    alt="" 
                    onLoad={handleImageLoad}
                />
            </div>
        </div>
    )
}