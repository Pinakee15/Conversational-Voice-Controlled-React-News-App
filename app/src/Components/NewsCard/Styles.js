// import {makeStyles} from '@material-ui/core' ;

// export default makeStyles({
//     media : {
//         height : "250px"
//     }
// })

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 250,
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white',
    margin : "0.7vw"
  },
  activeCard: {
    borderTop: '10px solid #22289a',
    backgroundColor : '#ffffcc',
    boxShadow : "8px 10px 5px grey"
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

//2. Info Cards Array:



// 3. Alan AI Logo Image:
// const //alanLogoSrc = 'https://alan.app/voice/images/previews/preview.jpg';

// 4. App styles.js:
//import { makeStyles } from '@material-ui/core/styles';

