import React from 'react';
import './Menu.css'

const Menu = ({ allNews, filterNews }) => {
    return (
        <section>
            <button onClick={() => filterNews(allNews.local)} >Local News</button>
            <button onClick={() => filterNews(allNews.technology)} >Technology</button>
            <button onClick={() => filterNews(allNews.entertainment)} >Entertainment</button>
            <button onClick={() => filterNews(allNews.science)} >Science</button>
            <button onClick={() => filterNews(allNews.health)} >Health</button>
        </section>
    )
}

export default Menu;