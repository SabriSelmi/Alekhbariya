import React from 'react';
import MiniCard from '../../../components/Card/MiniCard';
import {items} from "../../../data";

const LeftSection = () => {
    return ( 
        <div className="col-xl-3 col-lg-4 leftColumn">
            <section className="mostRead bList">
	            <h2 className="bTitle">الأكثر قراءة</h2>
                {
                    items.sort((x,y)=>y["read_number"] - x["read_number"])
                        .slice(0,4)
                        .map(({mainLink, title, picture}, key)=>
                            <MiniCard mainLink={mainLink} title={title} picture={picture} key={key} />
                    )
                }		
	        </section>
			<section className="mostRead bList">
	            <h2 className="bTitle">مجتمع</h2>
                {
                    items.filter(el=>el.type === "society" || el.type === "law")
                        .map(({mainLink, title, picture}, key)=>
                            <MiniCard mainLink={mainLink} title={title} picture={picture} key={key} />
                        )
                }		
	        </section>
		</div>
     );
}
 
export default LeftSection;