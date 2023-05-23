import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import "./styles/_global.scss";
import ThreejsScene from "./Components/ThreejsScene/ThreejsScene";
import Header from "./Components/Header/Header";
import Works from "./Components/Works/Works";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

interface CameraState {
  cameraX: number;
  cameraY: number;
  cameraZ: number;
  name: string;
}

const App: React.FC = () => {

  useEffect(() => {
    function handleResize() {
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
        {(cameraState.name === 'contact') ? <Contact handleHeaderListClick={handleHeaderListClick}/> : ''}
        <ThreejsScene
          mainElementWidth={mainElementWidth}
          mainElementHeight={mainElementHeight}
          cameraState={cameraState}
        />
      </main>
    </div>
  );
};

export default App;
