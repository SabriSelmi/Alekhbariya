import React from 'react';
import Card from '../../../components/Card/Card';
import PullItem from './PullItem';
import {items} from "../../../data";

const MiddleSection = () => {
    let data = items.filter(el => el["type"] === "politics" || el["type"] === "society");
    return ( 
        <div className="col-xl-3 col-lg-3 col-md-4">
            <PullItem/>
			<section className="blockNews">
	            <div className="bList">
                    {
                        data.slice(0,4).map((item, key)=><Card {...item} secondTypeCard={false} showPic={key === 0 ? true : false} key={key}/>)
                    }  
                </div>
            </section>
			<section className="blockNews">
	            <div className="bList">
                    {
                       data.slice(4,items.length).map((item, key)=><Card {...item} secondTypeCard={false} showPic={key === 0 ? true : false} key={key}/>)
                    }  
			    </div>			
            </section>
		</div>
     );
}
 
export default MiddleSection;