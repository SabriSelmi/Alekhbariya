import React from "react";
import MiddleSection from "./MiddleSection";
import Politics from "./Polititics";

const SectionTwo = () =>{
    return (
            <section>
                <div className="row">
                    <Politics/>
                    <MiddleSection/>
                </div>                
            </section>
    )
}

export default SectionTwo;