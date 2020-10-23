import React, { useState } from "react";
import "./side.css"


const SideBar = () => {
    const [show, setShow] = useState(false)
    const toggleShow = (e) =>{
        setShow(!show)
        e.preventDefault()
        return false
    }
    return (
<div className="yaybar yay-overlay yay-overlap-content">
<div className="nano has-scrollbar">
<div className="nano-content" tabIndex="0" style={{left: "-17px"}}>
<ul>
<li><a title="الرئيسية" href="/">الرئيسية</a></li>
<li className={show ? "open" : ""}  onClick={toggleShow}>
<a className="yay-sub-toggle" title="سياسة" href="/ar/articles/1/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9" >
سياسة
<span className="yay-collapse-icon fa fa-angle-down"></span>
</a>
<ul className={show ? "block" : "none"}>
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
</ul>
</div>
<div className="nano-pane"><div className="nano-slider" style={{transform: "translate(0px, 0px)", height: "670px"}}></div></div></div>
</div>
    )
} 

export default SideBar;