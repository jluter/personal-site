import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import "./styles/_global.scss";
import ThreejsScene from "./Components/ThreejsScene/ThreejsScene";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { lerp } from "three/src/math/MathUtils";
// import LineAnimation from './Components/LineAnimation/LineAnimation';
// import DesktopDescription from './Components/DesktopDescription/DesktopDescription';
// import BgAnimation from './Components/BgAnimation/BgAnimation';

interface CameraState {
  cameraX: number;
  cameraY: number;
  cameraZ: number;
}

const App: React.FC = () => {
  // const [windowWidth, setWindoWidth] = useState(window.innerWidth);
  // const [windowHeight, setWindoHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      // setWindoWidth(window.innerWidth);
      // setWindoHeight(window.innerHeight);
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

  const [worksClick, setWorksClick] = useState<number>(0);
  const [aboutClick, setAboutClick] = useState<number>(0);
  const [contactClick, setContactClick] = useState<number>(0);

  const [cameraState, setCameraState] = useState<CameraState>({
    cameraX: 0,
    cameraY: 0,
    cameraZ: 5
  });

  const handleHeaderListClick = (x:number, y:number, z:number ) => {
    
    setCameraState({
      cameraX: x,
      cameraY: y,
      cameraZ: z
    })
  }



  return (
    <div className="app">
      <main ref={mainElementRef} className="main-container">
        <Header           cameraState={cameraState}
          handleHeaderListClick = {handleHeaderListClick}/>
        <ThreejsScene
          mainElementWidth={mainElementWidth}
          mainElementHeight={mainElementHeight}
          cameraState={cameraState}
        />
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default App;
