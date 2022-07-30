import React, {useRef, useEffect, useState } from 'react';
import Card from './Card';//props.img, title, content 
import './ProjectContent.css'
import pixelGenerator from './Images/projects/objectPixelgenerator.png'
import pyligen from './Images/projects/pyligen.png'
import reactCards from './Images/projects/reactCards.png'
import retro from './Images/projects/retro-mmov3.png'
import rotten from './Images/projects/rottentacoscreencap.png'
import saveher from './Images/projects/saveher.png'


const cardsToMake = [//The urls are used as ids so keep them different
  {
    urlForNav: 'https://www.pyligen.com/',
    picture: pyligen, //Needs Recropped
    cardTitle: 'Python List Generator',
    cardContent:'A tool for generating 2d lists for use in python. I made this for building my own games.',
  },{
    urlForNav: 'https://codepen.io/thegetitguy/pen/QWOXypd/result',
    picture: pixelGenerator,
    cardTitle: 'Object Oriented Canvas Project',
    cardContent:'This is a project made to learn canvas and get more experience with the javascript class system.',
  },{
    urlForNav: 'https://codepen.io/thegetitguy/pen/ExbrgzN/result',
    picture: reactCards,
    cardTitle: 'React Generated Cards',
    cardContent:'Cards created in react by pulling from a random api generator.',
  },{
 /**    urlForNav: '#home4',    Evan said no :<
    picture: retro,
    cardTitle: 'Retro-MMO Fan Site',
    cardContent:'The latest version of my fansite for the Retro-MMO community.',
  },{  */
    urlForNav: 'https://codepen.io/thegetitguy/full/JjOaORK/result',
    picture: rotten,
    cardTitle: 'Mock E-Commerce Site',
    cardContent:'Practicing HTML and CSS by building a responsive Mock E-Commerce Site ',
  },{
    urlForNav: 'https://thegetitguy.itch.io/save-her-ugj-33',
    picture: saveher,
    cardTitle: 'Save Her',
    cardContent:'Game Jam game made in G-Develop in under a week.',
  }
]; 
function ProjectContent() { 
    const refforCardBox = useRef();
    const [cardBoxIsVisible, setCardBoxIsVisible] = useState()
    useEffect(()=>{ //using this to Change the class of the cards element when scrolled to
        const observer = new IntersectionObserver((entries)=>{
         const entry = entries[0];
         setCardBoxIsVisible(entry.isIntersecting)
         console.log(cardBoxIsVisible)
        })
        observer.observe(refforCardBox.current)
    },[])
  return (
    <div ref={refforCardBox} className={`contentCardsBox ${cardBoxIsVisible ? 'isVisible' : ''}`}>
        {cardsToMake.map((currentCard) =>(
           (<Card key={currentCard.urlForNav} url={currentCard.urlForNav} img={currentCard.picture} title={currentCard.cardTitle} content={currentCard.cardContent}/>)
        ))}
    </div>
  );
};

export default ProjectContent;