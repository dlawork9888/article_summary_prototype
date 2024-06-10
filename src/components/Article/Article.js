import React from 'react';
import './Article.css';

const Article = ({ title, date, url, content }) => {
    return (
        <div className="article">
            <div className="article-title">
                {title}
            </div>
            <div className='article-date'>
                {date}
            </div>
            <div className='article-url'>
                {url}
            </div>
            <div className='article-content'>
                {content}
            </div>
        </div>
    );
};

export default Article;