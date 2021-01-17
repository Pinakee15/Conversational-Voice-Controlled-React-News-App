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
    return (
        <div>
            <div className={classes.logoContainer}>
                <img className = {classes.Logo} src = "https://st3.depositphotos.com/15087372/37018/v/950/depositphotos_370182698-stock-illustration-microphone-fire-flame-logo-template.jpg" alt ="Logo"/>
            </div>
            < NewsCards articles = {newsArticles} />
        </div>
    )
}

export default App
