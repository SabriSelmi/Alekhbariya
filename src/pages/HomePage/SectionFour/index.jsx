import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';

const SectionFour = () => {
    return ( 
        <section>
            <div className="row">
                <RightSection/>
                <MiddleSection/>
                <LeftSection/>
            </div>
        </section>
     );
}
 
export default SectionFour;