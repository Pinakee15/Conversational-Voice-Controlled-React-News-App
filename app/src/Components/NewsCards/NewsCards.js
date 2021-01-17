import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard.js';
import {Grid , Grow , Typography} from '@material-ui/core';
import useStyles from './Styles';

const NewsCards = ({articles}) => {
    const classes = useStyles();
    const infoCards = [
        { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' , bgColor : "linear-gradient(to bottom right, rgb(249, 128, 130,5), rgb(61, 158, 250,4))" },
        { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news', bgColor : "linear-gradient(to bottom right, rgba(250, 246, 30, 0.7), rgba(231, 78, 13, 0.8))" },
        { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5',bgColor : "linear-gradient(to bottom right, rgba(32, 186, 217, 0.8), #0080ff" },
        { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN',bgColor : "linear-gradient(to bottom right, rgba(199, 246, 90, 0.8), rgba(55, 77, 4, 0.8))" },
      ];

    if (!articles.length){
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing = {3} >
                    {
                        infoCards.map(infoCard=>(
                        < Grid item xs = {12} sm={6} md ={4} lg={3} className = {classes.infoCard}> 
                            <div className = {classes.card} style = {{backgroundImage:infoCard.bgColor}}>
                                <Typography variant = "h5">{infoCard.title}</Typography>
                                { infoCard.info ? 
                                    (<Typography variant="h6"> 
                                    <strong><b>
                                        {infoCard.title.split(' ')[2]}:
                                        </b>
                                    </strong>
                                        <br />
                                       {infoCard.info} 
                                    </Typography>) : null
                                }
                                <Typography variant='h6'><b>Try Saying: </b>
                                <br />
                                <i>{infoCard.text}</i>
                                </Typography>
                            </div>
                          </ Grid >
                        ))
                    }
                </Grid>
            </ Grow>
        )
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing = {3}>
            {
            articles.map((article , i)=>(
                < Grid xs = {12} sm={6} md ={4} lg={3} style = {{display:"flex"}}> 
                  < NewsCard article = {article} i = {i}  key = {i}/>
                </ Grid >
             ))
            }
            </Grid>
        </ Grow>
    )
}

export default NewsCards
