import React from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import {items} from "../../../data";

const MiddleSection = () => {
    const data = items.slice(0,3)
    return ( 
        <div className="col-xl-3 col-lg-3 col-md-4 blockVideos ltr">
            <section>
                <h2 className="sTitle">متابعات بالفيديو</h2>
                <Carousel 
                    className={"owl-videos owl-carousel owl-theme owl-rtl owl-loaded owl-drag"}
                    itemsNumber={1}
                    margin={0}
                    autoplay={true}
                    loop={true}
                    dots={true}
                    items={data}
                    showDescription={true}
                    classTitle="bigTitle"
                />
                
            </section></div>
     );
}
 
export default MiddleSection;