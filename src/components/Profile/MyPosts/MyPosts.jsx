import React from 'react';
import test from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', like: 12},
        {id: 2, message: 'What are you doing?', like: 99},
        {id: 3, message: 'Hello, that time it is?', like: 0},
        {id: 4, message: 'Hi man!', like: 33},
        {id: 5, message: 'Hu are you?', like: 77}
    ]

    let postselements = posts
        .map( p => <Post message={p.message} like={p.like} />);

    return(
        <div className={test.postsBlock}>
            <div>
               <h3>My post</h3>
                <div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={test.post}>
                {postselements}
                {/* <Post message={postData[0].message} like={postData[0].like} />
                <Post message={postData[1].message} like={postData[1].like} />
                <Post message={postData[2].message} like={postData[2].like} />
                <Post message={postData[3].message} like={postData[3].like} /> */}
            </div>
        </div>
    );
}

export default MyPosts;