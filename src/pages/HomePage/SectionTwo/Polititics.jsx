import React from 'react';
import Card from '../../../components/Card/Card';
import {items} from "../../../data";

const Politics = () => {
    return ( 
        <div className="col-xl-6 col-lg-5 col-md-8 bList">
			<h2 className="sTitle">سياسة</h2>
            {
                items.filter(el => el["type"] === "politics" || el["type"] === "society")
                    .map((item, key)=><Card {...item} secondTypeCard={true} key={key}/>)
            }                
		</div>
     );
}
 
export default Politics;