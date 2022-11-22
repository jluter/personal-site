import React from 'react';
import './App.scss';
import './styles/_global.scss';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (<div>
    <Header/>
  </div>
  )
}

export default App;
