import React from 'react';
import test from '../News.module.css';


const NewsItem = (props) => {
    return(
        <div className={test.newsItem}>
            <h4>{props.title}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eum quis minima sit exercitationem dolor odio dolores tempore 
                provident voluptatum maxime molestiae mollitia, itaque quaerat 
                corporis quo hic adipisci laudantium quasi?</p>
            <div className={test.newsDate}>{props.data}</div>
        </div>
    )
} 

export default NewsItem;