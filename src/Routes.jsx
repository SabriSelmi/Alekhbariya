import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const Routes = () => {
    return ( 
        <React.Fragment>
            <Route exact path="/" component={HomePage} />
        </React.Fragment>
     );
}
 
export default Routes;