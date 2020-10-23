import React from "react";
import SectionLeft from "./SectionLeft";
import SectionMiddle from "./SectionMiddle";
import SectionRight from "./SectionRight";

const SectionOne = () =>{
    return (
            <section style={{paddingTop : "150px"}}>
                <div className="row">
                    <div className="col-xl-9 col-lg-8 inTheNews">
                        <div className="row">
                            <SectionRight/>
                            <SectionMiddle/>
                        </div>
                    </div>                    
                    <SectionLeft/>
                </div>
            </section>
    )
}

export default SectionOne;