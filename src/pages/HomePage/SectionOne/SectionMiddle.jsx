import React from 'react';
import Card from '../../../components/Card/Card';

const items = [
    {
        mainLink : "/ar/article/11658/%D8%AD%D9%85%D8%A9-%D8%A7%D9%84%D9%87%D9%85%D8%A7%D9%85%D9%8A-%D9%81%D9%8A-%D9%84%D8%AD%D8%B8%D8%A7%D8%AA-%D8%A5%D8%A8%D8%AF%D8%A7%D8%B9-%D8%A3%D9%8A%D9%87%D8%A7-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-%D8%B1%D8%A7%D8%B6%D9%8A%D8%A9-%D8%AA%D8%AA%D8%B9%D8%A7%D9%81%D9%89-%D9%85%D9%86-%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7-%D9%88%D8%A7%D9%84%D9%88%D8%B7%D9%86-%D8%B3%D9%8A%D8%AA%D8%B9%D8%A7%D9%81%D9%89", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603308834.jpg", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : "2020-10-21 20:33", 
        description : `حمة الهمامي في لحظات إبداع: "أيها العالم ، راضية تتعافى من "كورونا" والوطن سيتعافى"`
    },
    {
        mainLink : "/ar/article/11659/%D8%A3%D9%84%D9%81%D8%A9-%D9%8A%D9%88%D8%B3%D9%81-%D8%AA%D9%83%D8%AA%D8%A8-%D8%AD%D9%88%D8%A7%D8%B1%D8%A7-%D8%A8%D9%8A%D9%86-%D9%86%D8%B9%D9%85%D8%A9-%D9%88%D8%B9%D9%84%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%AC%D9%86%D8%A9", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603310055.png", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : " 2020-10-21 20:54", 
        description : `ألفة يوسف تكتب حوارا بين نعمة وعلية في "الجنة"..!`
    }
]

const SectionMiddle = () => {
    return ( 
        <div className="col-xl-4 col-lg-12 col-md-4">
            <div className="row">
                {items.map((item ,key)=>
                    <div className="col-xl-12 col-lg-6 col-md-12 col-sm-6" key={key}>
                        <Card {...item} showPic={true}/>																
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default SectionMiddle;