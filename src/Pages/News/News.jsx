import { useContext, useState, useEffect } from "react";

import * as Realm from 'realm-web'

import '../News/News.css'
import { Helmet } from 'react-helmet-async';
import { TheImage } from "../../Components/TheImage/TheImage";
import { SmallBox } from "../../Components/SmallBox/SmallBox";
import LanguageContext from "../../Context/LanguageContext"

import fillerImg from "/OtherImages/Loading/load-pfp.webp"
import news_image from '/OtherImages/FastLoadImg/Newss.webp'

export const News = () => {
    const { language, getTranslation } = useContext(LanguageContext);

    const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function initialize(){
      const app = new Realm.App({ id: import.meta.env.VITE_REALM_ID});

      const credentials = Realm.Credentials.anonymous();

      try {
        await app.logIn(credentials);
        const userInfos = await app.currentUser.functions.getItAll();
        
        console.log(userInfos);
        
        setDatas(userInfos);
        console.log("Successfully Logged In");
      } catch (err) {
        console.error("Failed to log in", err);
      }
    }
  
    initialize();
  }, []);

    return(
        <div className="NewsPage" style={{marginTop: "5rem"}}> 
            <Helmet>
                <title> {getTranslation("helmet-news")} </title>
                <meta name="description" content="Do not miss a single thing happening. There's a lot going on here :)"/>
                <link rel="canonical" href="https://www.ielrobotics.org/news"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="UTF-8"/>
                <meta name="author" content="contact@ielrobotics.org"/>
            </Helmet>
            <TheImage source={news_image} text={getTranslation("news-slogan")}/>
            {/* <div className="oopsie">
                <p className="oopsie-text">This Page is still on production</p>
                <p className="oopsie-text">But don't worry 🙌</p> 
                <p className="oopsie-text">It's coming soon 😇</p>
            </div> */}
            <div className="member-wrapper">
                {datas.map((mem) => {
                    return (
                        <SmallBox key={mem.id} image={fillerImg} name={mem.name} role={"Empty"} link={"Empty"} idval={mem.id}>  </SmallBox>
                    )
                })}
            </div>
        </div>
        
    )
}