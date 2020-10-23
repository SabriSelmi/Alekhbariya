import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import {items} from "../../../data";

const SectionThree = () => {
    const data = items.filter(el => el.type ==="sport");
    return ( 
        <section className="ltr">
            <h2 className="sTitle">رياضة</h2>
                <Carousel 
                    className={"owl-sport owl-carousel owl-theme owl-rtl owl-loaded owl-drag"} 
                    itemsNumber={4} 
                    margin={10}
                    dots={false}
                    autoplay={false}
                    loop={false}
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
 
export default SectionThree;