import React, { useRef } from 'react';
import Slider from 'react-slick';
import './NewTimelineItem.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ onClick }) => {
    return <div className="prev" style={{ zIndex: '2' }} onClick={onClick}>&#10094;</div>;
};

const CustomNextArrow = ({ onClick }) => {
    return <div className="next" style={{ zIndex: '2' }} onClick={onClick}>&#10095;</div>;
};

export const NewTimelineItem = ({ data, scrollToItem }) => {
    const itemRef = useRef(null);

    const handleClick = () => {
        scrollToItem(itemRef.current);
    };

    const images = data.images;

    const settings = {
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div className='new-achieve-main-container'>
            <div className='new-achieve-sub-container' ref={itemRef}>
                <div className="new-slideshow-container" style={{ width: '100%' }}>
                    <Slider {...settings} className='slider'>
                        {images.map((event_image, index) => (
                            <div key={index}>
                                <img className='slider-image' src={event_image} style={{ width: '100%', marginBottom: '5px', zIndex: '9999' }} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='new-space'></div>
                <div className='new-achieve-textbox'>
                    <span className="new-circle" onClick={handleClick} />
                    <h1 className="comp-title" style={{ marginBottom: '5px'}}>
                        {data.title}
                    </h1>
                    <p className="comp-desc">{data.description}</p>
                </div>
            </div>

        </div>
    )
};
