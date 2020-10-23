import React from 'react';
import Card from '../../../components/Card/Card';
import {items} from "../../../data";

const SectionMiddle = () => {
    const data = items.filter(el => el["type"] === "patriotism")
    return ( 
        <div className="col-xl-4 col-lg-12 col-md-4">
            <div className="row">
                {data.map((item ,key)=>
                    <div className="col-xl-12 col-lg-6 col-md-12 col-sm-6" key={key}>
                        <Card {...item} showPic={true}/>																
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default SectionMiddle;