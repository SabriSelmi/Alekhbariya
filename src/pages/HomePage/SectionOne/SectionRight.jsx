import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import {items} from "../../../data";

const SectionRight = () => {
    const data = items.slice(0,5);
    return ( 
        <div className="col-xl-8 col-lg-12 col-md-8 mainNews ltr">
            <Carousel 
                className={"owl-inTheNews owl-carousel owl-theme owl-rtl owl-loaded owl-drag"} 
                itemsNumber={1} 
                items={data}
                dots={true}
                margin={0}
                autoplay={true}
                loop={true}
                showDescription={true}
                classTitle="bigTitle"
            />
        </div>
     );
}
 
export default SectionRight;