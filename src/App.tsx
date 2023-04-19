import React, { useState, useEffect, useRef} from 'react';
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
      if (mainElementRef.current) {
      setElementHeight(mainElementRef.current.clientHeight);
      setElementWidth(mainElementRef.current.clientWidth);
    }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainElementRef = useRef<HTMLElement>(null);
  const [mainElementHeight, setElementHeight] = useState<number>(0);
  const [mainElementWidth, setElementWidth] = useState<number>(0);

  useEffect(() => {
    if (mainElementRef.current) {
      setElementHeight(mainElementRef.current.clientHeight);
      setElementWidth(mainElementRef.current.clientWidth);
    }
  }, []);

  return (<div>
    <main ref={mainElementRef} className='main-container'>
    <BgAnimation mainElementWidth={mainElementWidth} mainElementHeight={mainElementHeight} width={windowWidth} height={windowHeight}/>
    <AboutMe />
    </main>
  </div>
  )
}

export default App;
