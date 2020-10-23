import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const Routes = () => {
    return ( 
        <React.Fragment>
            {/* Need this route only for deploying */}
                <Route exact path="/Alekhbariya" component={HomePage} />
            {/*********/}
            <Route exact path="/" component={HomePage} />
        </React.Fragment>
     );
}
 
export default Routes;