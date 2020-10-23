import React from "react";
import OwlCarousel from 'react-owl-carousel';
import CarouselItem from "./CarouselItem";

const Carousel = ({className, itemsNumber, items, dots, margin, autoplay, loop, showDescription, classTitle}) =>{
    return (
        <OwlCarousel
            className={className}
            lazyLoad={false}
            rtl="t"
            margin={margin}
            nav={false}
            dots={dots}
            autoheight={"false"}
            items={itemsNumber}
            autoplay={autoplay}
            loop={loop}
        >
            {items.map((item, key)=><CarouselItem key={key} {...item} showDescription={showDescription} classTitle={classTitle}/>)}
        </OwlCarousel>
    )
}

export default Carousel;