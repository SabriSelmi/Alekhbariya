import React from 'react';
import Card from '../../../../components/Card/Card';

const latestNews = [
    {
        time : "2020-10-22 11:23",
        description:"الأميرال العكروت يقدم مقترحا يحسن خدمات المستشفيات العمومية ويضطر المصحات الخاصة لمراجعة أسعارها"
    },
    {
        time : "2020-10-22 11:20",
        description:`اجمالي وفايات "كورونا" في صفاقس يرتفع الى 64 حالة`
    },
    {
        time : "2020-10-22 11:17",
        description:"حظر ب6 أسابيع ليكون فعلا.. ؟"
    },
    {
        time : "2020-10-22 11:13",
        description:"لا تحاليل سريعة في الصيدليات الخاصة"
    },
    {
        time : "2020-10-22 11:08",
        description:`خلط جديد في تسليم جثث متوفين ب"كورونا"..!`
    }
]

const LatestNews = () => {
    return ( 
        <section className="lastNews text-right">
            <h2 className="bTitle">آخر الأخبار</h2>
            <div className="bList">
                {latestNews.map((news,key)=>
                    <Card {...news} key={key} showPic={false}/>
                )}		
            </div>
        </section>
     );
}
 
export default LatestNews;