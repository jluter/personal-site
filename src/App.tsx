import React from 'react';
import './App.scss';
import './styles/_global.scss';
import Header from './Components/Header/Header';
import LineAnimation from './Components/LineAnimation/LineAnimation';
import AboutMe from './Components/AboutMe/AboutMe';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (<div>
    <Header/>
    <LineAnimation />
    <AboutMe />
  </div>
  )
}

export default App;
