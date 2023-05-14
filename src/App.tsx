import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import "./styles/_global.scss";
import ThreejsScene from "./Components/ThreejsScene/ThreejsScene";
import Header from "./Components/Header/Header";
import Works from "./Components/Works/Works";
import About from "./Components/About/About";
// import Footer from './Components/Footer/Footer';
// import LineAnimation from './Components/LineAnimation/LineAnimation';
// import DesktopDescription from './Components/DesktopDescription/DesktopDescription';
// import BgAnimation from './Components/BgAnimation/BgAnimation';

interface CameraState {
  cameraX: number;
  cameraY: number;
  cameraZ: number;
  name: string;
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

  const [cameraState, setCameraState] = useState<CameraState>({
    cameraX: 0,
    cameraY: 0,
    cameraZ: 5,
    name: "",
  });

  const handleHeaderListClick = (
    x: number,
    y: number,
    z: number,
    name: string
  ) => {
    setCameraState({
      cameraX: x,
      cameraY: y,
      cameraZ: z,
      name: name,
    });
  };

  return (
    <div className="app">
      <main ref={mainElementRef} className="main-container">
        <Header
          cameraState={cameraState}
          handleHeaderListClick={handleHeaderListClick}
        />
        {(cameraState.name === 'works') ? <Works /> : ''}
        {(cameraState.name === 'about') ? <About handleHeaderListClick={handleHeaderListClick}/> : ''}
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
