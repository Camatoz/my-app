import React from 'react';
import test from './News.module.css';
import NewsItem from './NewsItem/NewsItem';

const News = (props) => {
    return(
        <div className={test.greyWrapper}>
            <h1>NEWS</h1>
            <div className={test.newsWrapper}>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        </div>
    )
} 

export default News;