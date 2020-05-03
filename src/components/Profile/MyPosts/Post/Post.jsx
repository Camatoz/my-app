import React from 'react';
import test from './Post.module.css';



const Post = (props) => {
    return(
        <div className={test.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsV-Cz0LT6LEVmss12XBxO2zVKJ1vCYNUEZ7dTgDQ99s4CkNl1" alt=""/>
            <div className={test.message}>{props.message}</div>  
            <div>Like - {props.like}</div>
        </div>
    );
}

export default Post;