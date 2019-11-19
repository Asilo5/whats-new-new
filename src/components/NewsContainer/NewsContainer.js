import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

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

export default NewsContainer;