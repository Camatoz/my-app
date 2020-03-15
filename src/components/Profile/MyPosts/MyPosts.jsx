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
                <div className={test.item}>22222</div>
                <div className={test.item}>33333</div>
                <div className={test.item}>44444</div>
            </div>
        </div>
    );
}

export default MyPosts;