import React from 'react';
import './App.scss';
import './styles/_global.scss';
import Header from './Components/Header/Header';
import LineAnimation from './Components/LineAnimation/LineAnimation';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import SolarAnimation from './Components/SolarAnimation/SolarAnimation';


const App: React.FC = () => {
  return (<div>
    <Header/>
    <LineAnimation />
    <main className='main-container'>
    <AboutMe />
     <SolarAnimation />
    </main>
    <Footer />
  </div>
  )
}

export default App;
