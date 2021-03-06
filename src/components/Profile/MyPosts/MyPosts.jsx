import React from 'react';
import test from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postselements = 
    props.posts.map( p => <Post message={p.message} like={p.like} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className={test.postsBlock}>
            <div>
               <h3>My post</h3>
                <div>
                    <textarea onChange={ onPostChange } 
                        value={props.newPostText}
                        ref={newPostElement} cols="30" rows="2" />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
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