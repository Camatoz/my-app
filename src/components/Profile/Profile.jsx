import React from 'react';
import test from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', like: 12},
        {id: 2, message: 'What are you doing?', like: 99},
        {id: 3, message: 'Hello, that time it is?', like: 0},
        {id: 4, message: 'Hi man!', like: 33},
        {id: 5, message: 'Hu are you?', like: 77}
    ]

    return(
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} />
        </div>
    )
}

export default Profile;