import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import {items} from "../../../data";

const SectionFive = () => {
    const data = items.slice(items.length-5,items.length)
    return ( 
        <section className="albums ltr">
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
                responsive={{
                    0:{
                        items : 1
                    },
                    480:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    },
                    1600:{
                        items:5
                    }
                }}
            />	
        </section>
     );
}
 
export default SectionFive;