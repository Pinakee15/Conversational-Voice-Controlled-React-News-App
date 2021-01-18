import React , {useEffect , useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCards';
import makeStyles from './Styles.js';

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
    }, []);
    const classes = makeStyles();
    console.log("this is the class :", classes);
    return (
        <div>
            <div className={classes.logoContainer}  >
                {/* <img className = {classes.Logo} src = "https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg" alt ="Logo"/> */}
                <img className = {classes.Logo} src = "https://images.squarespace-cdn.com/content/v1/58764c441e5b6cf25288e201/1556760027273-QM8KIQEHT74034LX5I85/ke17ZwdGBToddI8pDm48kIUEZvCntvRuFrrU4Evvy0AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdJo7p2UBMf0acwEEEI6kjX1UVIQ5H6RSYRCZnOUY-i9S7NDohP5ZQZYwmi-jCp-7J0/Newsfeed+Logo.png?format=2500w" alt ="Logo"/>
                {/* <h5 style={{color:"white", fontFamily: "'Playfair Display', serif"}}>NewsFeed</h5> */}
            </div>
            < NewsCards articles = {newsArticles} />
        </div>
    )
}

export default App
