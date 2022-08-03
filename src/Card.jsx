import React from 'react'; 
import MuiCard from '@mui/material/Card'
import { CardActionArea, CardContent, CardMedia, Button, Typography, Paper} from '@mui/material'; 
import './Card.css'
//A basic card,Title, Image, and text

function Card(props) {

  return ( 
    <MuiCard  elevation={4} className='cardContainer'>
      <CardActionArea href={props.url}>
          <CardMedia  className="imgToFillMedia" component="img" image={props.img} />
      </CardActionArea>
      <CardContent >
       
        <Typography variant='h4'>{props.title}</Typography> 
        <Typography variant="subtitle1">{props.content}</Typography>
      </CardContent>
    
    </MuiCard>
  );
};

export default Card;