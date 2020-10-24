import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./side.css"


const SideBar = () => {
    const [show, setShow] = useState(false)
    const toggleShow = (e) =>{
        setShow(!show)
        e.preventDefault()
        e.stopPropagation()
        return false
    }
    return (
        <div className="yaybar yay-overlay yay-overlap-content">
            <div className="nano has-scrollbar">
                <div className="nano-content" tabIndex="0" style={{left: "-17px"}}>
                    <ul>
                        <li><Link title="الرئيسية" to="/">الرئيسية</Link></li>
                        <li className={show ? "open" : ""}>
                        <a className="yay-sub-toggle" 
                            title="سياسة" 
                            href="/ar/articles/1/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9"
                            onClick={toggleShow}
                        >
                        سياسة
                        <span className="yay-collapse-icon fa fa-angle-down"></span>
                        </a>
                        <ul className={show ? "block" : "none"}>
                            <li><Link title="وطنية" to="/ar/articles/11/%D9%88%D8%B7%D9%86%D9%8A%D8%A9">وطنية</Link></li>
                            <li><Link title="عربية" to="/ar/articles/12/%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9">عربية</Link></li>
                            <li><Link title="عالمية" to="/ar/articles/13/%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9">عالمية</Link></li>
                        </ul>
                        </li>					
                        <li><Link title="أمن" to="/ar/articles/2/%D8%A3%D9%85%D9%86">أمن</Link></li>
                        <li><Link title="اقتصاد" to="/ar/articles/3/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF">اقتصاد</Link></li>
                        <li><Link title="ثقافة" to="/ar/articles/4/%D8%AB%D9%82%D8%A7%D9%81%D8%A9">ثقافة</Link></li>
                        <li><Link title="رياضة" to="/ar/articles/5/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9">رياضة</Link></li>
                        <li><Link title="مجتمع" to="/ar/articles/6/%D9%85%D8%AC%D8%AA%D9%85%D8%B9">مجتمع</Link></li>
                        <li><Link title="قضاء" to="/ar/articles/7/%D9%82%D8%B6%D8%A7%D8%A1">قضاء</Link></li>
                        <li><Link title="تعليم" to="/ar/articles/8/%D8%AA%D8%B9%D9%84%D9%8A%D9%85">تعليم</Link></li>
                        <li><Link title="منظمات" to="/ar/articles/9/%D9%85%D9%86%D8%B8%D9%85%D8%A7%D8%AA">منظمات</Link></li>
                        <li><Link title="متابعات بالفيديو" to="/ar/videos">متابعات بالفيديو</Link></li>
                        <li><Link title="من نحن" to="/ar/contact">من نحن</Link></li>
                    </ul>
                </div>
                <div className="nano-pane"><div className="nano-slider" style={{transform: "translate(0px, 0px)", height: "670px"}}></div></div>
            </div>
        </div>
    )
} 

export default SideBar;