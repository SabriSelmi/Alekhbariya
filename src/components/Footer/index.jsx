import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9 links">
                    <div className="row"> 

                        <ul className="col-sm">
                            <li><Link title="الرئيسية" to="/">الرئيسية</Link></li>  
                            <li><Link title="سياسة" to="/ar/articles/1/%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9">سياسة</Link></li>
                            <li><Link title="أمن" to="/ar/articles/2/%D8%A3%D9%85%D9%86">أمن</Link></li>
                            <li><Link title="اقتصاد" to="/ar/articles/3/%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF">اقتصاد</Link></li>
                        </ul>
                                                                
                        <ul className="col-sm">
                            <li><Link title="ثقافة" to="/ar/articles/4/%D8%AB%D9%82%D8%A7%D9%81%D8%A9">ثقافة</Link></li>
                            <li><Link title="رياضة" to="/ar/articles/5/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9">رياضة</Link></li>
                            <li><Link title="مجتمع" to="/ar/articles/6/%D9%85%D8%AC%D8%AA%D9%85%D8%B9">مجتمع</Link></li>
                            <li><Link title="قضاء" to="/ar/articles/7/%D9%82%D8%B6%D8%A7%D8%A1">قضاء</Link></li>
                        </ul>
                                                                
                        <ul className="col-sm">
                            <li><Link title="تعليم" to="/ar/articles/8/%D8%AA%D8%B9%D9%84%D9%8A%D9%85">تعليم</Link></li>
                            <li><Link title="منظمات" to="/ar/articles/9/%D9%85%D9%86%D8%B8%D9%85%D8%A7%D8%AA">منظمات</Link></li>
                            <li><Link title="متابعات بالفيديو" to="/ar/articles/10/%D9%85%D8%AA%D8%A7%D8%A8%D8%B9%D8%A7%D8%AA">متابعات بالفيديو</Link></li>
                            <li><Link title="من نحن" to="/ar/contact">من نحن</Link></li>
                        </ul>
                                                                                    
                    </div>
                </div>
                <div className="col-md-3 logo"><Link to="/"><img src="https://alikhbariaattounsia.com/images/logo.png" alt="logo" /></Link></div>
            </div>
            <div className="bFooter">
                <div className="row">
                    <div className="col-md-8">2020 © الإخباريّة التونسيّة. تطوير الموقع من قبل : <a href="https://www.tanitweb.com" target="_blank" rel="noopener noreferrer">TANITWEB</a></div>
                        <div className="col-md-4 social">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/alikhbaria/"><i className="fab fa-facebook-f"></i></a>					
                        <a target="_blank" rel="noopener noreferrer" href="/#"><i className="fab fa-youtube"></i></a>					
                        <a target="_blank" rel="noopener noreferrer" href="/#"><i className="fab fa-twitter"></i></a>					
                        <a target="_blank" rel="noopener noreferrer" href="/#"><i className="fab fa-instagram"></i></a>									
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;