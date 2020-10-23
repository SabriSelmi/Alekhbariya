import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CarouselItem from "./CarouselItem";

const items = [
    {
        mainLink : "/ar/article/11684/%D8%A7%D8%AC%D9%85%D8%A7%D9%84%D9%8A-%D9%88%D9%81%D8%A7%D9%8A%D8%A7%D8%AA-%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7-%D9%81%D9%8A-%D8%B5%D9%81%D8%A7%D9%82%D8%B3-%D9%8A%D8%B1%D8%AA%D9%81%D8%B9-%D8%A7%D9%84%D9%89-64-%D8%AD%D8%A7%D9%84%D8%A9", 
        picture : "https://alikhbariaattounsia.com/uploads/content/big/1603362012.jpg", 
        figCaptionLink : "/ar/articles/6/%D9%85%D8%AC%D8%AA%D9%85%D8%B9", 
        figCaption : "مجتمع", 
        time : "2020-10-22 11:20", 
        description : `اجمالي وفايات "كورونا" في صفاقس يرتفع الى 64 حالة`
    },
    {
        mainLink : "/ar/article/11682/%D9%84%D8%A7-%D8%AA%D8%AD%D8%A7%D9%84%D9%8A%D9%84-%D8%B3%D8%B1%D9%8A%D8%B9%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9", 
        picture : "https://alikhbariaattounsia.com/uploads/content/big/1603361581.png", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : "2020-10-22 11:13", 
        description : `لا تحاليل سريعة في الصيدليات الخاصة`
    },
    {
        mainLink : "/ar/article/11684/%D8%A7%D8%AC%D9%85%D8%A7%D9%84%D9%8A-%D9%88%D9%81%D8%A7%D9%8A%D8%A7%D8%AA-%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7-%D9%81%D9%8A-%D8%B5%D9%81%D8%A7%D9%82%D8%B3-%D9%8A%D8%B1%D8%AA%D9%81%D8%B9-%D8%A7%D9%84%D9%89-64-%D8%AD%D8%A7%D9%84%D8%A9", 
        picture : "https://alikhbariaattounsia.com/uploads/content/big/1603362012.jpg", 
        figCaptionLink : "/ar/articles/6/%D9%85%D8%AC%D8%AA%D9%85%D8%B9", 
        figCaption : "مجتمع", 
        time : "2020-10-22 11:20", 
        description : `اجمالي وفايات "كورونا" في صفاقس يرتفع الى 64 حالة`
    }, 
    {
        mainLink : "/ar/article/11682/%D9%84%D8%A7-%D8%AA%D8%AD%D8%A7%D9%84%D9%8A%D9%84-%D8%B3%D8%B1%D9%8A%D8%B9%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B5%D9%8A%D8%AF%D9%84%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9", 
        picture : "https://alikhbariaattounsia.com/uploads/content/big/1603361581.png", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : "2020-10-22 11:13", 
        description : `لا تحاليل سريعة في الصيدليات الخاصة`
    }
]

const Carousel = () =>{
    return (
        <OwlCarousel
            className="owl-inTheNews owl-carousel owl-theme owl-rtl owl-loaded owl-drag"
            lazyLoad={false}
            rtl="t"
            margin={0}
            nav={false}
            dots={true}
            autoheight={"false"}
            items={1}
            autoplay={true}
            loop={true}
        >
            {items.map((item, key)=><CarouselItem key={key} {...item}/>)}
        </OwlCarousel>
    )
}

export default Carousel;