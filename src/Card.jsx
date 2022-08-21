import React from 'react'; 
import MuiCard from '@mui/material/Card'
import { CardActions, CardContent, CardMedia, Button, Typography, Paper} from '@mui/material'; 
import './Card.css'
import { GitHub } from '@mui/icons-material'; 
//A basic card,Title, Image, and text

function Card(props) {

  return ( 
    <MuiCard sx={{ display: 'flex', flexDirection:'column'}}  elevation={4} className='cardContainer'>
      
      <CardMedia  className="imgToFillMedia" component="img" image={props.img} />
      <CardContent sx={{flexGrow:'1'}} >
        <Typography gutterBottom variant='h4'>{props.title}</Typography>
        <Typography gutterBottom  variant="subtitle1">{props.content}</Typography>
      </CardContent>
      <CardActions sx={{ justifySelf: 'flex-end',paddingBottom:'15px' }}>
        {props.url1 ? <Button href={props.url1} size='small' color='secondary'>Live</Button> : <></>}
        {props.url2 ? <Button href={props.url2}	size='small' color='secondary'><GitHub/></Button> : <></>}
      </CardActions>
    </MuiCard>
  );
};

export default Card;