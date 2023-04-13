import React, { useState, useEffect} from 'react';
import './App.scss';
import './styles/_global.scss';
// import Header from './Components/Header/Header';
// import LineAnimation from './Components/LineAnimation/LineAnimation';
import AboutMe from './Components/AboutMe/AboutMe';
// import Footer from './Components/Footer/Footer';
// import DesktopDescription from './Components/DesktopDescription/DesktopDescription';
import BgAnimation from './Components/BgAnimation/BgAnimation';


const App: React.FC = () => {

  const [windowWidth, setWindoWidth] = useState(window.innerWidth);
  const [windowHeight, setWindoHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindoWidth(window.innerWidth);
      setWindoHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (<div>
    <BgAnimation width={windowWidth} height={windowHeight}/>
    <main className='main-container'>
    <AboutMe />
    </main>
  </div>
  )
}

export default App;
