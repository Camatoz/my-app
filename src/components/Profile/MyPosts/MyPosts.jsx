import React from 'react';
import test from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {



    let postselements = 
    props.posts.map( p => <Post message={p.message} like={p.like} />);

   

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