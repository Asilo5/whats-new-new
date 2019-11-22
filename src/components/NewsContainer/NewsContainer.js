import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';
import PropTypes from 'prop-types';

const NewsContainer = ({ currentNews }) => {
  const theNews = currentNews.map((news) => {
      return (
        <NewsArticle key={news.id} {...news} />
      )
  })

  return (
    <section className='news-container'>
       {theNews}
    </section>
  )
} 

NewsContainer.propTypes = {
  currentNews: PropTypes.array
}

export default NewsContainer;