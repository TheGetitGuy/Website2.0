import React from 'react';
import './Home.css';
import Header from './Header';
import NavBar from './NavBar'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Home() {
  return (
    <main>
      <Header/>
      <NavBar/>
    </main>
  );
}

export default Home;