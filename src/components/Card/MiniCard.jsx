import React from 'react';
import { Link } from 'react-router-dom';

const MiniCard = ({mainLink, title, picture}) => {
    return ( 
        <div className="item">
            <div className="row">
                <figure className="col-lg-4"><Link to={mainLink} title={title}><img src={picture} alt="most-readed"/></Link></figure>
                <div className="col-lg-8 desc"><h3 className="smallTitle"><Link to={mainLink} title={title}>{title}</Link></h3></div>
            </div>
        </div>
     );
}
 
export default MiniCard;