import React from 'react';
import './Menu.css'; 
import PropTypes from 'prop-types';

const Menu = ({ allNews, filterNews }) => {
    return (
        <section className='menu'>
            <button onClick={() => filterNews(allNews.local)} >Local News</button>
            <button onClick={() => filterNews(allNews.technology)} >Technology</button>
            <button onClick={() => filterNews(allNews.entertainment)} >Entertainment</button>
            <button onClick={() => filterNews(allNews.science)} >Science</button>
            <button onClick={() => filterNews(allNews.health)} >Health</button>
        </section>
    ) 
}

Menu.propType = {
  allNews: PropTypes.object,
  filterNews: PropTypes.func
}

export default Menu;