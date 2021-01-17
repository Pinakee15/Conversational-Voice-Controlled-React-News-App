import React from 'react' ;
import {Card ,CardActions , CardActionArea, CardContent, CardMedia , Button , Typography} from '@material-ui/core'
import useStyles from './Styles.js'

const NewsCard = ({article , i}) => {
    const classes = useStyles();

    return (
        <Card className = {classes.card} >
            <CardActionArea href = {article.url} target = "_blank" >
                {/* <CardMedia image = {article.urlToImage || "https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg"} /> */}
                <CardMedia className={classes.media} image ={ article.urlToImage || 'https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg'}/>
                <div className = {classes.details} >
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(article.publishedAt).toDateString())}</Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>{article.source.name}</Typography>
                </div>
                <Typography className = {classes.title} gutterBottom variant = "h5">{article.title}</ Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{article.description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className = {classes.cardActions} >
                <Button size ="small" color = "primary">See More...</Button>
                <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
