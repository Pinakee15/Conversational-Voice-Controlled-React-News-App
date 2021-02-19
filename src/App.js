import React , {useEffect , useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCards';
import makeStyles from './Styles.js';
const { wordsToNumbers } = require('words-to-numbers');

const alanKey = "f13f9a67525c1ad754effa23d50cc4df2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = ()=> {
    const [newsArticles , setNewsArticles] =useState([]);
    const [activeArticle , setActiveArticle] = useState(-1);

    useEffect(()=>{
        alanBtn({
            key : alanKey ,
            onCommand : ({command , articles , number})=>{
                if(command === 'news headlines'){
                    setNewsArticles(articles);
                }
                else if(command === "headline"){
                    //setActiveArticle(prevActiveArticle => prevActiveArticle + 1)
                    console.log("We reached in the highligh command section")
                    setActiveArticle(prevActive => prevActive+1);
                }
                else if (command === "open"){
                    console.log(`This is the number ${number}`)
                    if(number == 'for'){
                        number = 4;
                    }

                    if(typeof(number) !== "number"){
                        console.log(`We entered the typof statement ${number}`);
                        number = wordsToNumbers(number);
                    }
                    console.log(`After conversion the number is: ${number}`);
                    if(number >20){
                        console.log(`We entered the greater than 20 statement`);
                        alanBtn().playText("Please try a number less than number of current articles");
                        return
                    }

                    window.open(articles[number-1].url , '_blank');
                    console.log(articles[number-1].url)
                }
            }
        })
    }, []);
    const classes = makeStyles();

    return (
        <div>
            <div className={classes.logoContainer}  >
                <img className = {classes.Logo} src = "https://images.squarespace-cdn.com/content/v1/58764c441e5b6cf25288e201/1556760027273-QM8KIQEHT74034LX5I85/ke17ZwdGBToddI8pDm48kIUEZvCntvRuFrrU4Evvy0AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdJo7p2UBMf0acwEEEI6kjX1UVIQ5H6RSYRCZnOUY-i9S7NDohP5ZQZYwmi-jCp-7J0/Newsfeed+Logo.png?format=2500w" alt ="Logo"/>
                {/* <h5 style={{color:"white", fontFamily: "'Playfair Display', serif"}}>NewsFeed</h5> */}
            </div>
            < NewsCards articles = {newsArticles} activeArticle = {activeArticle}/>
        </div>
    )
}

export default App
