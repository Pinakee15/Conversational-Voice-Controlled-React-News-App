import React from 'react';
import NewsCard from '../NewsCard/NewsCard.js';

const NewsCards = ({articles}) => {
    const allArticles = articles.map((article , i)=>{
        < NewsCard article = {article} key = {i} />
    });

    return (
        <div>
            {allArticles}
        </div>
    )
}

export default NewsCards
