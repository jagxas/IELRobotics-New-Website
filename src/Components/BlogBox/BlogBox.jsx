import '../BlogBox/BlogBox.css'

import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import LanguageContext from '../../Context/LanguageContext';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const BlogBox = (Props) => {
    const imageAdress = Props.image;
    const boxTitle = Props.title;
    const boxContent = Props.content;
    const date = Props.date;

    const { language, getTranslation } = useContext(LanguageContext);

    const navigate = useNavigate();

        return (
        <div className="blog-content-holder">

            <div className="image-container">
                <img src={imageAdress} className="image" alt='content-img'/>
            </div>

            <div className="text-content">
                <h1 className='content-box-title'> {getTranslation(boxTitle)} </h1>
                <div>
                    <p>Author</p>
                    <p>Date</p>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac ultricies diam, non dictum magna. Nam metus dolor, aliquet at ex sed, posuere tincidunt arcu. Donec eget vestibulum nunc. Nam sem justo, sodales et erat in, faucibus viverra justo. Praesent at sem elit. Morbi sit amet euismod leo, convallis pulvinar nulla. Maecenas vitae lorem nulla. Nulla facilisi. Sed sed ipsum consequat, vehicula tortor sed, pharetra turpis. Donec viverra ornare sem, eu faucibus turpis luctus eget. Aliquam elementum sapien ex, non finibus urna aliquam sollicitudin. Morbi eleifend elementum diam. Nullam nec ipsum orci. Phasellus sed congue eros. Fusce felis elit, dictum ut molestie porttitor, volutpat vel risus.
            </div>
        </div>
    )

}
