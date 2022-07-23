import React, {useState} from 'react';
import './Home.css';
import Header from './Header';
import NavBar from './NavBar';
import Card from './Card';//props.img, title, content
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Home() {
  
  const [GetitProfile, setGetitProfile] = useState({})

  fetch('https://api.github.com/users/TheGetitGuy')
    .then((response)=> response.json())
    .then((json)=>{
      setGetitProfile(json)
      console.log(GetitProfile)
    })

  return (
    <main>
      <Header/>
      <NavBar/>
      <Card img={GetitProfile.avatar_url} title={`Hello!`} content={GetitProfile.bio}/> 
    </main>
  );
}

export default Home;