import React , {useEffect , useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCards'

const alanKey = "f13f9a67525c1ad754effa23d50cc4df2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = ()=> {
    const [newsArticles , setNewsArticles] =useState([]);

    useEffect(()=>{
        alanBtn({
            key : alanKey ,
            onCommand : ({command , articles})=>{
                if(command === 'news headlines'){
                    //alert("This code was executed");
                    console.log("Reply from Alan" ,articles);
                    setNewsArticles(articles);
                }
            }
        })
    });
    const allNews = newsArticles.map(article=>{
        return <p>{article['author']}</p>
    })
    console.log("This is the new allNews " , allNews)

    return (
        <div>
            <h2>React app</h2>
            {allNews}
            < NewsCards articles = {newsArticles} />
        </div>
    )
}

export default App
