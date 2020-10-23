import React from "react";
import OwlCarousel from 'react-owl-carousel';
import CarouselItem from "./CarouselItem";

const Carousel = ({className, itemsNumber, items, dots, margin, autoplay, loop, showDescription, classTitle, responsive}) =>{
    return (
        <OwlCarousel
            className={className}
            lazyLoad={true}
            lazyContent={true}
            rtl="t"
            margin={margin}
            nav={false}
            dots={dots}
            autoheight={"false"}
            items={itemsNumber}
            autoplay={autoplay}
            loop={loop}
            responsiveClass={true}
            responsive={responsive}
        >
            {items.map((item, key)=><CarouselItem key={key} {...item} showDescription={showDescription} classTitle={classTitle}/>)}
        </OwlCarousel>
    )
}

export default Carousel;