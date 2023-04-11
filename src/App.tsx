import React from 'react';
import './App.scss';
import './styles/_global.scss';
import Header from './Components/Header/Header';
import LineAnimation from './Components/LineAnimation/LineAnimation';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import DesktopDescription from './Components/DesktopDescription/DesktopDescription';
import ThreejsScene from './Components/ThreejsScene/ThreejsScene';

const App: React.FC = () => {
  return (<div>
    <Header/>
    <LineAnimation />
    <main className='main-container'>
    <AboutMe />
    <DesktopDescription />
    </main>
    <Footer />
    <ThreejsScene />
  </div>
  )
}

export default App;
