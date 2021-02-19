import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    container : {
        padding : '0 4%',
        width : '100%',
        margin : 0
    }
    ,
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        margin : "0.6vw",
        width : '100%',
        height : '58vh',
        padding : '4%',
        // borderRadius : 10 ,
        borderRadius: "10px 33px",
        color : 'white',
        alignItems : 'center',
        //backgroundImage: "linear-gradient(to bottom right, red, yellow)"
        backgroundImage: "linear-gradient(to bottom right, rgb(249, 128, 130,5), rgb(61, 158, 250,4))",
        boxShadow: "2px 6px 8px #588BAE"
    } ,
    infoCard : {
        display : 'flex',
        flexDirection : 'column',
        textAlign : 'center'
    } ,
    Logo : {
        fontFamily: "'Hachi Maru Pop', cursive" 
    }
    ,
    logoContainer : {
        padding : "18px" ,
        margin : "10px", 
        display :"flex"
    }

});


