import React from "react";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import Politics from "./Polititics";

const SectionTwo = () =>{
    return (
            <section>
                <div className="row">
                    <Politics/>
                    <MiddleSection/>
                    <LeftSection/>
                </div>                
            </section>
    )
}

export default SectionTwo;