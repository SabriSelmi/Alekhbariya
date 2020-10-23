import React from 'react';
import MiniCard from '../../../components/Card/MiniCard';
import {items} from "../../../data";

const LeftSection = () => {
    const data = items.filter(el => el["type"] === "law")
    return ( 
        <div className="col-xl-3 col-lg-4 leftColumn">
            <section className="mostRead bList">
                <h2 className="bTitle">قضاء</h2>
                {
                    data.map((item, key)=><MiniCard {...item} key={key}/>)
                }
            </section>
        </div>
     );
}
 
export default LeftSection;