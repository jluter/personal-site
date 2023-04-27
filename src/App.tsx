import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import "./styles/_global.scss";
import ThreejsScene from "./Components/ThreejsScene/ThreejsScene";
// import Header from './Components/Header/Header';
// import LineAnimation from './Components/LineAnimation/LineAnimation';
// import Footer from './Components/Footer/Footer';
// import DesktopDescription from './Components/DesktopDescription/DesktopDescription';
// import BgAnimation from './Components/BgAnimation/BgAnimation';

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

  return (
    <div className="app">
      <main ref={mainElementRef} className="main-container">
        <ThreejsScene
          mainElementWidth={mainElementWidth}
          mainElementHeight={mainElementHeight}
        />
      </main>
    </div>
  );
};

export default App;
