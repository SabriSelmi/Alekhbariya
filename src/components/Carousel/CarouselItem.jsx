import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = ({mainLink, picture, figCaptionLink, figCaption, time, description, showDescription, classTitle }) => {
    return ( 
        <div className="item animate__animated animate__fadeIn">
                <figure>
                    <Link to={mainLink} title={description}><img className="" data-src={picture} data-src-retina={picture} title={description} src={picture} alt="news"/></Link>
                    {figCaption ? 
                    <figcaption><Link to={figCaptionLink} title={figCaption}>{figCaption}</Link></figcaption>
                    : null
                    }
                </figure>
                <div className="desc">
                    <time className="dateTime"><i className="far fa-clock"></i> {time}</time>
                    <h3 className={classTitle}><Link to={mainLink} title={description}>{description}</Link></h3>
                    {showDescription ? <p>...{description}</p> : null}
                </div>
            </div>
     );
}
 
export default CarouselItem;