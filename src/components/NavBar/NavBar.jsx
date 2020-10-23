import React, {useEffect, useState} from "react";

const items = [
    {
        link : "/ar/article/11673/%D8%AE%D9%84%D8%A7%D9%84-%D9%8A%D9%88%D9%85%D9%86%D9%8A%D9%86-%D9%81%D9%8A-%D8%AC%D9%86%D8%AF%D9%88%D8%A8%D8%A9-%D8%AA%D8%B3%D8%AC%D9%8A%D9%84-121-%D8%A7%D8%B5%D8%A7%D8%A8%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D8%A8%D9%81%D9%8A%D8%B1%D9%88%D8%B3-%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7",
        description : "خلال يومنين في جندوبة: تسجيل 121 اصابة جديدة بفيروس كورونا"
    },
    {
        link : "/ar/article/11672/%D8%AA%D8%B9%D8%B1%D8%B6%D8%AA%D8%A7-%D9%84%D8%B4%D8%AA%D8%A7%D8%A6%D9%85-%D8%B9%D9%86%D8%B5%D8%B1%D9%8A%D8%A9-%D9%87%D8%AC%D9%88%D9%85-%D8%B9%D9%84%D9%89-%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1%D9%8A%D8%AA%D9%8A%D9%86-%D8%A8%D8%B3%D9%84%D8%A7%D8%AD-%D8%A3%D8%A8%D9%8A%D8%B6-%D9%81%D9%8A-%D8%A8%D8%A7%D8%B1%D9%8A%D8%B3",
        description : "تعرضتا لشتائم عنصرية.. هجوم على جزائريتين بسلاح أبيض في باريس"
    },
    {
        link : "/ar/article/11671/%D9%85%D9%86%D8%B8%D9%85%D8%A9-%D8%A7%D9%84%D8%B5%D8%AD%D8%A9-%D8%AA%D9%83%D8%B4%D9%81-%D9%87%D8%B0%D8%A7-%D9%87%D9%88-%D8%A7%D9%84%D8%B3%D8%A8%D8%A8-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A-%D9%84%D8%A7%D9%86%D8%AA%D8%B4%D8%A7%D8%B1-%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7",
        description : "منظمة الصحة تكشف: هذا هو السبب الرئيسي لانتشار كورونا…"
    },
    {
        link : "/ar/article/11675/%D9%87%D8%B0%D9%87-%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-%D8%A7%D9%84%D9%88%D8%B6%D8%B9-%D8%A7%D9%84%D9%88%D8%A8%D8%A7%D8%A6%D9%8A-%D9%84%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7-%D8%A8%D9%85%D8%AE%D8%AA%D9%84%D9%81-%D8%A7%D9%84%D9%88%D9%84%D8%A7%D9%8A%D8%A7%D8%AA",
        description : "هذه تفاصيل الوضع الوبائي لكورونا بمختلف الولايات"
    },
    {
        link : "/ar/article/11674/%D8%A7%D9%84%D9%82%D8%B5%D8%B1%D9%8A%D9%86-%D8%A7%D8%AE%D8%AA%D9%81%D8%A7%D8%A1-%D8%AC%D8%AB%D8%A9-%D8%A3%D8%AD%D8%AF-%D8%A7%D9%84%D9%85%D8%AA%D9%88%D9%81%D9%8A%D9%86-%D8%A8%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7",
        description : "القصرين: اختفاء جثة أحد المتوفين بكورونا"
    },
    
]

const NavBar = () =>{
    const [marginRight, setMarginRight] = useState(0);
    const [classInput, setClassInput] = useState(false);
    const [classSideBar, setClassSideBar] = useState(false);
    const [intervalId, setIntervalId] = useState();
    const [stopped, setStopped] = useState(false);

    const toggleSideBar = () =>{
        let body = document.getElementsByTagName("body")[0];
        let className = classSideBar ? "ar yay-hide" : "ar";
        let nano = document.getElementsByClassName("nano-pane")[0];
        let nanoClass = classSideBar ? "nano-pane none" : "nano-pane";
        body.setAttribute("class", className);
        nano.setAttribute('class',nanoClass);
        setClassSideBar(!classSideBar);
    }

    useEffect(()=>{  
        if(!stopped) {
             const interval = setInterval(() => {
                if(marginRight > -1050){
                    setMarginRight(marginRight => marginRight - 1) 
                }
            }, 10);   
        setIntervalId(interval); 
        return ()=> clearInterval(interval)
        }     
           
    }, [marginRight, stopped]);

    if(marginRight <= -1050){
        setMarginRight(0) 
    }  

    const show = () =>{
        setClassInput(!classInput);
    }
    return (
        <header className="headerSite rtl">
	        <div className="container-fluid">
		        <div className="headerPage">
			        <div className="logo">
				        <a href="/" title=""><img src="https://alikhbariaattounsia.com/images/logo.png" alt=""/></a>
				        <button className="yay-toggle color-white" type="button" onClick={toggleSideBar}><i className="fa fa-bars"></i></button>
			        </div>
                <div className="headerContent">
				    <div className="topHeader">
					    <div className="bn-breaking-news bn-effect-scroll bn-direction-rtl" style={{height: "40px", lineHeight: "38px", borderRadius: "2px", borderWidth: "1px"}}>
	                        <div className="bn-label">الأخبار</div>
	                        <div className="bn-news" style={{right: "67.9688px"}}>
                                <ul style={{width: "1890.45px", marginRight: `${marginRight}px`}}>
                                    {items.map(({link, description}, key)=>
                                        <li key={key} onMouseOver={()=>{clearInterval(intervalId);setStopped(true)}} onMouseOut={()=>setStopped(false)}>
                                            <a href={link} title={description} key={key}>{description}</a>
                                        </li>
                                    )}
                                </ul>
	                        </div>
                        </div>
                        <div className="social">
                            <a target="_blank" href="/#"><i className="fab fa-facebook-f"></i></a>					
                            <a target="_blank" href="/#"><i className="fab fa-youtube"></i></a>						
                            <a target="_blank" href="/#"><i className="fab fa-twitter"></i></a>						
                            <a target="_blank" href="/#"><i className="fab fa-instagram"></i></a>																		
                            <a target="_blank" href="/#"><i className="fas fa-rss"></i></a>
                        </div>
				    </div>
                    <div className="mainMenu">
                        <ul className="menu d-flex">
                            <li><a title="الرئيسية" href="/">الرئيسية</a></li>																								
                            <li className="dropdown"><a className="dropdown-toggle" title="سياسة" href="/ar/articles/1/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9">سياسة</a>
                            <ul className="dropdown-menu">
                                <li><a title="وطنية" href="/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9">وطنية</a></li>
                                <li><a title="عربية" href="/ar/articles/12/%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9">عربية</a></li>
                                <li><a title="عالمية" href="/ar/articles/13/%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9">عالمية</a></li>
                            </ul>
                            </li>					
                            <li><a title="أمن" href="/ar/articles/2/%D8%A3%D9%85%D9%86">أمن</a></li>
                            <li><a title="اقتصاد" href="/ar/articles/3/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF">اقتصاد</a></li>
                            <li><a title="ثقافة" href="/ar/articles/4/%D8%AB%D9%82%D8%A7%D9%81%D8%A9">ثقافة</a></li>
                            <li><a title="رياضة" href="/ar/articles/5/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9">رياضة</a></li>
                            <li><a title="مجتمع" href="/ar/articles/6/%D9%85%D8%AC%D8%AA%D9%85%D8%B9">مجتمع</a></li>
                            <li><a title="قضاء" href="/ar/articles/7/%D9%82%D8%B6%D8%A7%D8%A1">قضاء</a></li>
                            <li><a title="تعليم" href="/ar/articles/8/%D8%AA%D8%B9%D9%84%D9%8A%D9%85">تعليم</a></li>
                            <li><a title="منظمات" href="/ar/articles/9/%D9%85%D9%86%D8%B8%D9%85%D8%A7%D8%AA">منظمات</a></li>
                            <li><a title="متابعات بالفيديو" href="/ar/videos">متابعات بالفيديو</a></li>
                            <li><a title="من نحن" href="/ar/contact">من نحن</a></li>
                            <li className="search-toggle" onClick={show}><i className="fas fa-search"></i></li>
                        </ul>
                        <div className={classInput ? "top-search show" : "top-search"}><input type="text" placeholder="بحث ..." id="searchKey" className="getSearch" data-url="/ar/articles/tags/keys"/></div>
                    </div>
		 	    </div>
		    </div>
	    </div>
    </header>
    )
}

export default NavBar;