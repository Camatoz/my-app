import React from 'react';
import classes from './Profile.module.css';

let test = {
    "item": "Profile_item__ONuNu"
}

const Profile = () => {
    return(
        <div className="content">
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"/>
            </div>
            <div>
                ava
            </div>
            <div>
                post
                <div>
                new post
                </div>
            </div>
            <div className='post'>
                <div className={test.item}>11111</div>
                <div className={test.item}>22222</div>
            </div>
        </div>
    )
}

export default Profile;