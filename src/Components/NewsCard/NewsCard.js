import React , {useState , useEffect , createRef} from 'react' ;
import {Card ,CardActions , CardActionArea, CardContent, CardMedia , Button , Typography} from '@material-ui/core'
import useStyles from './Styles.js';
import classNames from 'classnames';

const NewsCard = ({article , i , activeArticle}) => {
    const classes = useStyles();
    console.log(`This is the active : ${activeArticle} and i : ${i}`);

    const [elRef , setElRefs] = useState([]);

    const scrollToRef = ((refs)=> window.scroll(0 , refs.current.offsetTop - 50));

    useEffect(()=>{
        setElRefs((refs) => Array(20).fill().map((_,j)=> refs[j] || createRef()));
    } , []) ;

    useEffect(()=>{
        if(i === activeArticle && elRef[activeArticle]){
            scrollToRef(elRef[activeArticle]);
        }
    } , [i , activeArticle , elRef])

    return (
        <Card ref = {elRef[i]} className = { classNames(classes.card , activeArticle===i ? classes.activeCard : null) } >
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
                <Button size ="small" color = "primary">Learn more</Button>
                <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
