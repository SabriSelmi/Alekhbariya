import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import {items} from "../../../data";

const SectionFive = () => {
    const data = items.slice(items.length-4,items.length)
    return ( 
        <section className="albums">
            <Carousel
                className={"owl-albums owl-carousel owl-theme owl-rtl owl-loaded owl-drag"}
                itemsNumber={4}
                autoplay={false}
                loop={false}
                margin={3}
                dots={false}
                showDescription={false}
                items={data}
                classTitle="mediumTitle"
            />	
        </section>
     );
}
 
export default SectionFive;