import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ headline, img, description }) => {
    return (
        <section className='news-article'>
            <img src={img} alt={headline} />
            <h2>{headline}</h2>
             <h3>{description}</h3>
        </section>
    )
}

export default NewsArticle;