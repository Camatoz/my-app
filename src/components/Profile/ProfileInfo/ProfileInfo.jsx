import React from 'react';
import test from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_960_720.jpg"/>
            </div>
            <div className={test.avaBlock}>
                <h3>ava + description</h3>
            </div>
        </div>
    )
}

export default ProfileInfo;