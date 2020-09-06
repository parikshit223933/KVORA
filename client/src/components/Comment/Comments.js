import React from 'react';
import {Comment} from '../';

class Comments extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                <div className="py-3 pl-3 pr-2">
                    <Comment/>
                </div>
                <hr/>
            </React.Fragment>
        )
    }
}
export default Comments;