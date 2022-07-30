import React from 'react';
import './Card.css'
//A basic card,Title, Image, and text?
//
//

function Card(props) {
  return (
      <div className='cardContainer'>
            <img src={props.img}/>
            
        <div className='cardInnerContainer'>
           <a className='cardLinks' href={props.url}> <h1>{props.title}</h1> </a>
            <p>{props.content}</p>
        </div>
    </div>
  );
};

export default Card;