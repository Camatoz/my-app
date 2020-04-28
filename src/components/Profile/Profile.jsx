import React from 'react';
import test from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';



const Profile = () => {
    return(
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"/>
            </div>
            <div>
                <h1>io87yg</h1>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;