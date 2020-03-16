import React from 'react';
import test from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {
    return(
        <div>
            <div>
               My post
                <div>
                    new post
                </div>
            </div>
            <div className='post'>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;