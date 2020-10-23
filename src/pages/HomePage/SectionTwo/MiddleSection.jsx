import React from 'react';
import Card from '../../../components/Card/Card';
import PullItem from './PullItem';

const items = [
    {
        mainLink : "/ar/article/11729/%D9%86%D8%B5%D8%A7%D9%81-%D8%A8%D9%86-%D8%B9%D9%84%D9%8A%D8%A9-%D8%AA%D9%83%D8%B4%D9%81-%D8%B6%D8%BA%D9%88%D8%B7%D8%A7%D8%AA-%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A%D8%A9-%D9%81%D8%B1%D8%B6%D8%AA-%D8%A5%D9%84%D8%BA%D8%A7%D8%A1-%D8%A7%D9%84%D8%AA%D8%AD%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D8%A5%D8%AC%D8%A8%D8%A7%D8%B1%D9%8A-%D8%A5%D8%AB%D8%B1-%D9%81%D8%AA%D8%AD-%D8%A7%D9%84%D8%AD%D8%AF%D9%88%D8%AF", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603393956.png", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : "2020-10-22 20:12", 
        description : `أكدت الناطقة باسم وزارة الصحة، المديرة العامة للمرصد الوطني للأمراض الجديدة والمستجدة نصاف بن علية`
    },
    {
        mainLink : "/ar/article/11728/%D8%AA%D8%A3%D9%83%D9%8A%D8%AF%D8%A7-%D9%84%D8%B3%D8%A8%D9%82-%D8%A7%D9%84%D8%A5%D8%AE%D8%A8%D8%A7%D8%B1%D9%8A%D8%A9-%D8%AA%D9%85%D8%AF%D9%8A%D8%AF-%D8%AD%D8%B8%D8%B1-%D8%A7%D9%84%D8%AC%D9%88%D9%84%D8%A7%D9%86-%D9%81%D9%8A-%D9%88%D9%84%D8%A7%D9%8A%D8%A7%D8%AA-%D8%AA%D9%88%D9%86%D8%B3-%D8%A7%D9%84%D9%83%D8%A8%D8%B1%D9%89-%D9%88%D9%81%D9%82-%D9%87%D8%B0%D9%87-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D9%8A%D8%AA", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603393566.jpg", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : "2020-10-22 20:06", 
        description : `مثلما سبقت بذلك "الاخبارية" صباح اليوم تم مساء اليوم الخميس الاعلان رسميا عن تمديد حظر الجول`
    },
    {
        mainLink : "/ar/article/11727/%D9%87%D8%B0%D9%87-%D8%AD%D8%B5%D9%8A%D9%84%D8%A9-%D9%85%D8%AE%D8%A7%D9%84%D9%81%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D8%B1%D9%88%D8%AA%D9%88%D9%83%D9%88%D9%84-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%87%D9%89-%D9%88%D8%A7%D9%84%D9%85%D8%B7%D8%A7%D8%B9%D9%85-%D9%81%D9%8A-%D8%A8%D9%84%D8%AF%D9%8A%D8%A9-%D8%AA%D9%88%D9%86%D8%B3", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603393245.jpg", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : " 2020-10-22 20:00", 
        description : `قال رئيس مكتب الشرطة البيئية في بلدية تونس طارق باكير، إنه ومنذ دخول قرار حظر الجولان في ولاية تونس`
    },
    {
        mainLink : "/ar/article/11725/%D8%B1%D8%A6%D9%8A%D8%B3-%D8%A7%D9%84%D8%AC%D9%85%D9%87%D9%88%D8%B1%D9%8A%D8%A9-%D9%8A-%D8%B3%D9%84-%D9%85-%D8%A3%D9%88%D8%B1%D8%A7%D9%82-%D8%A7%D8%B9%D8%AA%D9%85%D8%A7%D8%AF-4-%D8%B3%D9%81%D8%B1%D8%A7%D8%A1-%D8%AC%D8%AF%D8%AF", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603390468.jpg", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : "2020-10-22 19:14", 
        description : `أعلنت رئاسة الجمهورية مساء اليوم الخميس 22 اكتوبر 2020 ان الرئيس قيس سعيّد سلّم اليوم &nbsp;خلال موكب انت`
    },
    {
        mainLink : "/ar/article/11724/%D8%A7%D9%84%D9%85%D9%86%D8%B3%D8%AA%D9%8A%D8%B1-%D8%AA%D8%AA%D8%B9%D8%A7%D9%81%D9%89-%D9%88%D8%AA%D8%A3%D8%AE%D8%B0-%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1-%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603390327.jpg", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : " 2020-10-22 19:12", 
        description : `تم اليوم الخميس 22 اكتوبر 2020 الاتفاق على الإبقاء على نفس الإجراءات و القرارات التي تم اتخاذها سابق`
    },
    {
        mainLink : "/ar/article/11723/%D8%A7%D8%B3%D9%86%D8%A7%D8%AF-%D8%A7%D9%84%D8%AA%D9%84%D8%A7%D9%82%D9%8A%D8%AD-%D8%A8%D9%88%D8%B5%D9%81%D8%A9-%D8%B7%D8%A8%D9%8A%D8%A9-%D9%87%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D8%B5%D9%8A%D8%A7%D8%AF%D9%84%D8%A9-%D8%AA%D8%B1%D9%81%D8%B6-%D9%82%D8%B1%D8%A7%D8%B1-%D9%88%D8%B2%D9%8A%D8%B1-%D8%A7%D9%84%D8%B5%D8%AD-%D8%A9", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603389535.jpg", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : "2020-10-22 18:58", 
        description : `...أعلنت هيئة الصيادلة في بلاغ لها اليوم الخميس 22 أكتوبر 2020، رفضها القرار الذي أعلن عنه وزير الصحة ف`
    },
    {
        mainLink : "/ar/article/11722/%D9%82%D8%B1%D8%B6-%D9%81%D8%B1%D9%86%D8%B3%D9%8A-%D8%A8-140-%D9%85%D9%84%D9%8A%D8%A7%D8%B1-%D9%84%D8%AA%D9%88%D9%86%D8%B3-%D9%87%D8%B0%D9%87-%D8%A3%D9%88%D8%AC%D9%87-%D8%B5%D8%B1%D9%81%D9%87%D8%A7", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603388983.jpg", 
        figCaptionLink : "/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9", 
        figCaption : "وطنية", 
        time : "2020-10-22 18:49", 
        description : `وقعت تونس والوكالة الفرنسية للتنمية، اليوم الخميس، اتفاقا إطاريا لخط تمويل مبدئي لدعم السياسات العمو`
    },
    {
        mainLink : "/ar/article/11721/%D9%8A%D8%B2%D9%86-318-%D9%83%D9%8A%D9%84%D9%88%D8%BA%D8%B1%D8%A7%D9%85%D8%A7-%D8%B1%D8%A7%D9%81%D8%B9%D8%A9-%D9%84%D8%A5%D8%AC%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%B1%D8%AC%D9%84-%D8%A7%D9%84%D8%A3%D9%83%D8%AB%D8%B1-%D8%A8%D8%AF%D8%A7%D9%86%D8%A9-%D9%85%D9%86-%D8%B4%D9%82%D8%AA%D9%87-%D9%81%D9%8A-%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A%D8%A7", 
        picture : "https://alikhbariaattounsia.com/uploads/content/medium/1603388562.jpg", 
        figCaptionLink : "/ar/articles/13/%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9", 
        figCaption : "عالمية", 
        time : "2020-10-22 18:42", 
        description : `...نُقل الرجل الأكثر بدانة في بريطانيا من شقته لتلقي العلاج بالمستشفى باستخدام رافعة بعد أن وصل وزنه إل`
    },
]

const MiddleSection = () => {
    return ( 
        <div className="col-xl-3 col-lg-3 col-md-4">
            <PullItem/>
			<section className="blockNews">
	            <div className="bList">
                    {
                        items.slice(0,4).map((item, key)=><Card {...item} secondTypeCard={false} showPic={key === 0 ? true : false} key={key}/>)
                    }  
                </div>
            </section>
			<section className="blockNews">
	            <div className="bList">
                    {
                        items.slice(4,items.length).map((item, key)=><Card {...item} secondTypeCard={false} showPic={key === 0 ? true : false} key={key}/>)
                    }  
			    </div>			
            </section>
		</div>
     );
}
 
export default MiddleSection;