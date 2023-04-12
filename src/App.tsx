import React from 'react';
import './App.scss';
import './styles/_global.scss';
import Header from './Components/Header/Header';
import LineAnimation from './Components/LineAnimation/LineAnimation';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import DesktopDescription from './Components/DesktopDescription/DesktopDescription';
import P5Test from './Components/BgAnimation/P5Test';

const App: React.FC = () => {


  return (<div>
    <Header/>
    <LineAnimation />
    <main className='main-container'>
    <AboutMe />
    <DesktopDescription />
    </main>
    <Footer />
    <P5Test />
  </div>
  )
}

export default App;
