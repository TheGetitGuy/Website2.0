import React, { useState, useEffect } from 'react';
import Card from './Card';//props.img, title, content 
import pixelGenerator from './Images/projects/objectPixelgenerator.png'
import pyligen from './Images/projects/pyligen.png'
import reactCards from './Images/projects/reactCards.png'
import retro from './Images/projects/retro-mmov3.png'
import rotten from './Images/projects/rottentacoscreencap.png'
import saveher from './Images/projects/saveher.png'


const cardsToMake = [//The urls are used as ids so keep them different
  {
    urlForNav: '#home',
    picture: pyligen, //Needs Recropped
    cardTitle: 'Python List Generator',
    cardContent:'A tool for generating 2d lists for use in python. I made this for building my own games.',
  },{
    urlForNav: '#home2',
    picture: pixelGenerator,
    cardTitle: 'Object Oriented Canvas Project',
    cardContent:'This is a project made to learn canvas and get more experience with the javascript class system.',
  },{
    urlForNav: '#home3',
    picture: reactCards,
    cardTitle: 'React Generated Cards',
    cardContent:'Cards created in react by pulling from a random api generator.',
  },{
    urlForNav: '#home3',
    picture: retro,
    cardTitle: 'Retro-MMO Fan Site',
    cardContent:'The latest version of my fansite for the Retro-MMO community.',
  },{
    urlForNav: '#home3',
    picture: rotten,
    cardTitle: 'Mock E-Commerce Site',
    cardContent:'Practicing HTML and CSS by building a responsive Mock E-Commerce Site ',
  },{
    urlForNav: '#home3',
    picture: saveher,
    cardTitle: 'Save Her',
    cardContent:'Game Jam game made in G-Develop in under a week.',
  }
]; 
function ProjectContent() { 
  return (
    <div className='contentCardsBox'>
        {cardsToMake.map((currentCard) =>(
           (<Card key={currentCard.urlForNav} img={currentCard.picture} title={currentCard.cardTitle} content={currentCard.cardContent}/>)
        ))}
    </div>
  );
};

export default ProjectContent;