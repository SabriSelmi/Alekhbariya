import React from 'react';
import { Link } from 'react-router-dom';
import {items} from "../../../data";

const RightSection = () => {
    const data = items.filter(el => el["type"] === "culture");
    return ( 
        <div className="col-xl-6 col-lg-5 col-md-8">
            <section>
	            <h2 className="sTitle">ثقافة</h2>
	                <div className="row">
                    <div className="col-xl-8 col-lg-12 col-md-8 item mainCulture">
						<figure>
                            <Link to={data[0]["mainLink"]} title={data[0]["title"]}><img src={data[0]["picture"]} title={data[0]["title"]} alt="culture"/></Link>
                            <figcaption><Link to={data[0]["figCaptionLink"]} title={data[0]["title"]}>{data[0]["figCaption"]}</Link></figcaption>
                        </figure>
                        <div className="desc">
                            <time className="dateTime"><i className="far fa-clock"></i>{data[0]["time"]}</time>
                            <h3 className="bigTitle"><Link to={data[0]["mainLink"]} title={data[0]["title"]}>{data[0]["title"]}</Link></h3>
                            <p>{data[0]["description"]}</p>
                        </div>
					</div>

                    <div className="col-xl-4 col-lg-12 col-md-4">
			<div className="row">
                {
                    data.slice(1,3)
                        .map((item, key)=>
                        <div className="col-xl-12 col-lg-6 col-md-12 col-sm-6 item" key={key}>
                            <figure>
                                <Link to={item["mainLink"]} title={item["title"]}><img src={item["picture"]} title={item["title"]} alt="culture"/></Link>
                                <figcaption><Link to={item["figCaptionLink"]} title={item["figCaption"]}>{item["figCaption"]}</Link></figcaption>
                            </figure>
                            <div className="desc">
                <time className="dateTime"><i className="far fa-clock"></i> {item["time"]}</time>
                                <h3 className="smallTitle"><Link to={item["mainLink"]} title={item["title"]}>{item["title"]}</Link></h3>
                            </div>
                        </div>
                    )
                }
			</div>
		</div>
        </div>
    </section>
    </div>
     );
}
 
export default RightSection;