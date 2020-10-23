import React from 'react';

const CarouselItem = ({mainLink, picture, figCaptionLink, figCaption, time, description }) => {
    return ( 
        <div className="item">
                <figure>
                    <a href={mainLink} title={description}><img data-src={picture} title={description} src={picture} alt="news" style={{opacity: "1"}}/></a>
                    <figcaption><a href={figCaptionLink} title={figCaption}>{figCaption}</a></figcaption>
                </figure>
                <div className="desc">
                    <time className="dateTime"><i className="far fa-clock"></i> {time}</time>
                    <h3 className="bigTitle"><a href={mainLink} title={description}>{description}</a></h3>
                    <p>...{description}</p>
                </div>
            </div>
     );
}
 
export default CarouselItem;