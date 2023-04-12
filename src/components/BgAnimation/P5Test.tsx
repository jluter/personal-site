import React from "react";
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";

const sketch: Sketch = (p5) => {
  p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

  p5.draw = () => {
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
  };
};

const newSketch: Sketch = (p5) => {
    let numPoints: number = 500;
    let points: any = [];
    let amplitude: any = [];

    p5.setup = () => {
        let width = 2000;
        let height = 400;
        p5.createCanvas(width, height);
        for (let i=0; i < numPoints; i++) {
            let x: number = p5.map(i, 0, numPoints-1, 0, width); //2000 is the width of the canvas.
            let y: number = height/2 + p5.random(-height/5, height/5) * p5.sin(p5.map(i, 0, numPoints-1, 0, 3*3.14159)) * p5.map(p5.abs(i-numPoints/2), 0, numPoints/2, 1, 0.2);//3.14159 is being used in place of PI
        }       
    }
}


const P5Test: React.FC = () => {
  return <ReactP5Wrapper sketch={newSketch} />;
};

export default P5Test;
