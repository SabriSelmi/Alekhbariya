import React from 'react';

const Card = ({mainLink, picture, figCaptionLink, figCaption, time, description, secondTypeCard, showPic }) => {
       return !secondTypeCard ?
        <div className="item">
            {showPic ? 
                <figure>
                    <a href={mainLink} title={description}><img src={picture} title={description} alt="news"/></a>
                    <figcaption><a href={figCaptionLink} title={figCaption}>{figCaption}</a></figcaption>
                </figure>
            : null}
            <div className="desc">
                <time className="dateTime"><i className="far fa-clock"></i> {time}</time>
                <h3 className={showPic ? "mediumTitle" : "smallTitle"}><a href={mainLink} title={description}>{description}</a></h3>
            </div>
        </div> :
        <div className="item">
            <div className="row">
                <div className="col-5">
                    <figure>
                        <a href={mainLink} title={description}><img src={picture} title={description} alt="news"/></a>
                        <figcaption><a href={figCaptionLink} title={figCaption}>{figCaption}</a></figcaption>
                    </figure>
                </div>
                <div className="desc col-7">
                    <time className="dateTime"><i className="far fa-clock"></i> {time}</time>
                    <h3 className="mediumTitle"><a href={mainLink} title={description}>{description}</a></h3>
                    <p>{description}</p>
                </div>
            </div>        
        </div>
     ;
}
 
export default Card;