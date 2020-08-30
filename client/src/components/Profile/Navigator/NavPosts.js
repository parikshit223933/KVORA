import React from 'react';
import {PostsReusable} from '../../';

class NavPosts extends React.Component
{
    render()
    {
        return(
            <div>
                <PostsReusable/>
                <PostsReusable/>
            </div>
        )
    }
}
export default NavPosts;