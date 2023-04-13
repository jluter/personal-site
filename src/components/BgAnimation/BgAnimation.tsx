import React from "react";
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";
import './BgAnimation.scss';


interface BgAnimationProps {
    width: number;
    height: number;
    mainElementWidth: number;
    mainElementHeight: number;
  }

const BgAnimation: React.FC<BgAnimationProps> = ({width, height, mainElementHeight, mainElementWidth}) => {

    console.log("!", width, "?", mainElementWidth)

  //p5 Animation as a function --------------
  const sketch: Sketch = (p5) => {
    let numPoints: number = 500;
    let points: any = [];
    let amplitude: any = [];

    p5.setup = () => {
      p5.createCanvas(mainElementWidth, mainElementHeight);
      for (let i = 0; i < numPoints; i++) {
        let x: number = p5.map(i, 0, numPoints - 1, 0, mainElementWidth); //2000 is the mainElementWidth of the canvas.
        let y: number =
          mainElementHeight / 2 +
          p5.random(-mainElementHeight / 5, mainElementHeight / 5) *
            p5.sin(p5.map(i, 0, numPoints - 1, 0, 3 * p5.PI)) *
            p5.map(p5.abs(i - numPoints / 2), 0, numPoints / 2, 1, 0.2);
        let a = p5.random(10, 50);
        amplitude.push(a);
        points.push({ x, y });
      }
    };

    p5.draw = () => {
    //   p5.background(0);
      p5.clear();
      p5.noStroke();
      p5.fill(300);
      const xAngle = p5.map(p5.mouseX, 0, mainElementWidth, -4 * p5.PI, 4 * p5.PI, true);
      const yAngle = p5.map(p5.mouseY, 0, mainElementWidth, -6 * p5.PI, 4 * p5.PI, true);
      for (let i = 0; i < numPoints; i++) {
        let x = points[i].x;
        // let y = points[i].y;
        let a = amplitude[i];


        points[i].y += a * p5.sin((p5.frameCount / 50 / 2 + i) * 10) * 0.025;
        points[i].x += a * p5.sin((p5.frameCount / 50 / 2 + i) * xAngle) * 0.025;
        p5.ellipse(x, points[i].y + ((yAngle / 3) * xAngle) / 3, 1);
      }
    };
  };
  return <ReactP5Wrapper sketch={sketch} />;
};

export default BgAnimation;