import React from 'react';
import {Link} from "react-router-dom";

const Card = ({mainLink, picture, figCaptionLink, figCaption, time, description, secondTypeCard, showPic }) => {
       return !secondTypeCard ?
        <div className="item">
            {showPic ? 
                <figure>
                    <Link to={mainLink} title={description}><img src={picture} title={description} alt="news"/></Link>
                    {figCaption ? <figcaption><Link to={figCaptionLink} title={figCaption}>{figCaption}</Link></figcaption> : null}
                </figure>
            : null}
            <div className="desc">
                <time className="dateTime"><i className="far fa-clock"></i> {time}</time>
                <h3 className={showPic ? "mediumTitle" : "smallTitle"}><Link to={mainLink} title={description}>{description}</Link></h3>
            </div>
        </div> :
        <div className="item">
            <div className="row">
                <div className="col-5">
                    <figure>
                        <Link to={mainLink} title={description}><img src={picture} title={description} alt="news"/></Link>
                        {figCaption ? <figcaption><Link to={figCaptionLink} title={figCaption}>{figCaption}</Link></figcaption> : null}
                    </figure>
                </div>
                <div className="desc col-7">
                    <time className="dateTime"><i className="far fa-clock"></i> {time}</time>
                    <h3 className="mediumTitle"><Link to={mainLink} title={description}>{description}</Link></h3>
                    <p>{description}</p>
                </div>
            </div>        
        </div>
     ;
}
 
export default Card;