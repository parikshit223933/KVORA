import React from 'react';
import {QuestionReusable} from '../../';

class NavQuestions extends React.Component
{
    render()
    {
        return(
            <div>
                <QuestionReusable/>
                <QuestionReusable/>
                <QuestionReusable/>
                <QuestionReusable/>
            </div>
        )
    }
}
export default NavQuestions;