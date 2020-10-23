import React from 'react';
import Card from '../../../../components/Card/Card';
import {items} from "../../../../data";

const LatestNews = () => {
    return ( 
        <section className="lastNews text-right">
            <h2 className="bTitle">آخر الأخبار</h2>
            <div className="bList">
                {items.slice(0,5).map((news,key)=>
                    <Card {...news} key={key} showPic={false}/>
                )}		
            </div>
        </section>
     );
}
 
export default LatestNews;