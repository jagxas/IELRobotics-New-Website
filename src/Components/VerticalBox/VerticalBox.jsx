import '../VerticalBox/VerticalBox.css'
import { useContext } from 'react';

import LanguageContext from '../../Context/LanguageContext';

export const VerticalBox = (Props) => {
    const imageAdress = Props.image1;
    const imageAdress2 = Props.image2;

    const imageM1 = Props.imageM1;
    const imageM2 = Props.imageM2;

    const boxTitle = Props.title;
    const boxContent = Props.content;
    const link = Props.link;

    const idArray = ["frc","jf","tekno","other"];
    const type = Props.type;

    const { language, getTranslation } = useContext(LanguageContext);

    return (
        <div className="vertical-holder">
            <div className="vertical-image-container">
                <img src={window.innerWidth > 500 ? imageAdress2 : imageM2} className='vertical-image-front' alt='verticalimg' loading='lazy'/>
                <img src={window.innerWidth > 500 ? imageAdress : imageM1} className="vertical-image-back" alt='verticalimg' loading='lazy'/>
            </div>
                
                
            <h1 className='vertical-box-title' id={`vertical-${idArray[type]}`}> {getTranslation(boxTitle)} </h1>
            
            <div className="vertical-text-content">
                {getTranslation(boxContent)}
                <button className="vertical-redirect-button">
                    <a draggable="true"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer">
                        &gt; {getTranslation("more")}
                    </a>
                </button>
            </div>
        </div>
    )
}