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
                    autoplay={false}
                    loop={false}
                    items={data}
                    classTitle="mediumTitle"
                />
        </section>
     );
}
 
export default SectionThree;