import React from 'react';

const PullItem = () => {
    return ( 
        <section className="blockPoll">
            <h2 className="sTitle">استطلاع رأي</h2>
            <div className="item poll14">	
                <div className="desc">
                    <h3 className="smallTitle">هل انت مع حكم الإعدام على مرتكبي الاغتصاب ؟</h3>
                    <div className="pollContent" id="pollContent14">
                        <ul className="listVote">
                        <li><input type="radio" name="answer14" id="answer1" value="31"/> نعم</li>
                        <li><input type="radio" name="answer14" id="answer2" value="32"/> لا</li>
                        </ul>
                        <div className="btn pollVote" data-url="/front/polls/poll" data-error="اختر إجابة" data-id="14">تصويت</div>
                    </div> 
                </div>
            </div>		
        </section>
     );
}
 
export default PullItem;