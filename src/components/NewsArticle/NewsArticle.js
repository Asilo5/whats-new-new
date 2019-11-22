import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-type';

const NewsArticle = ({ headline, img, description, url }) => {
    return (
        <section className='news-article'>
            <img src={img} alt={headline} />
            <h2>{headline}</h2>
            <h3>{description}</h3>
            <a href={url}>Continue Reading Article</a>
        </section>
    )
}

NewsArticle.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.element,
  description: PropTypes.string,
  url: PropTypes.string
}

export default NewsArticle;