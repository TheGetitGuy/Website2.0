import React, { useState, useEffect } from 'react';
import Card from './Card';//props.img, title, content 
import pixelGenerator from './Images/projects/objectPixelgenerator.png'


const cardsToMake = [//The urls are used as ids so keep them different
  {
    urlForNav: '#home',
    picture: {pixelGenerator},
    cardTitle: 'Object Oriented Canvas Project',
    cardContent:'This is a project made to learn canvas and get more experience with the javascript class system.',
  },{
    urlForNav: '#home2',
    picture: {pixelGenerator},
    cardTitle: 'Object Oriented Canvas Project',
    cardContent:'This is a project made to learn canvas and get more experience with the javascript class system.',
  },{
    urlForNav: '#home3',
    picture: {pixelGenerator},
    cardTitle: 'Object Oriented Canvas Project',
    cardContent:'This is a project made to learn canvas and get more experience with the javascript class system.',
  }
]; 
function ProjectContent() { 
  return (
    <div>
        {cardsToMake.map((currentCard) =>(
           (<a href={currentCard.urlForNav} className='pointer'><Card key={currentCard.urlForNav} img={currentCard.picture} title={currentCard.cardTitle} content={currentCard.cardContent}/></a>)
        ))}
    </div>
  );
};

export default ProjectContent;