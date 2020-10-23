import React from "react";
import SectionLeft from "./SectionLeft";
import SectionMiddle from "./SectionMiddle";
import SectionRight from "./SectionRight";

const SectionOne = () =>{
    return (
            <section style={{paddingTop : "150px"}}>
                <div className="row">
                    <SectionRight/>
                    <SectionMiddle/>
                    <SectionLeft/>
                </div>
            </section>
    )
}

export default SectionOne;