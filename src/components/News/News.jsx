import React from 'react';
import test from './News.module.css';
import NewsItem from './NewsItem/NewsItem';



const News = (props) => {

    let newsElement =
    props.state.newsData.map(news => <NewsItem title={news.title} data={news.data} /> );

    return(
        <div className={test.greyWrapper}>
            <h1>NEWS</h1>
            <div className={test.newsWrapper}>
                {/* <NewsItem title={newsData[0].title} data={newsData[0].data} />
                <NewsItem title={newsData[1].title} data={newsData[1].data} />
                <NewsItem title={newsData[2].title} data={newsData[2].data} /> */}
                { newsElement }
            </div>
        </div>
    )
} 

export default News;