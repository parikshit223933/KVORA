import React from 'react';
import {DraftsReusable} from '../';

class DraftsMid extends React.Component
{
    render()
    {
        return(
            <div>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div className="font-heavy">
                        1 Draft
                    </div>
                    <div className="text-secondary">
                        Delete All Drafts
                    </div>
                </div>
                <hr className="my-2"/>
                <div>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                    <DraftsReusable/>
                </div>
            </div>
        )
    }
}
export default DraftsMid;