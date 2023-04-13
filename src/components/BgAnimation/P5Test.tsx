import React from "react";
import { ReactP5Wrapper, Sketch } from "react-p5-wrapper";

const sketch: Sketch = (p5) => {
  let numPoints: number = 500;
  let points: any = [];
  let amplitude: any = [];
  let width: number = 2000;
  let height: number = 400;

  p5.setup = () => {
      p5.createCanvas(width, height);
      for (let i=0; i < numPoints; i++) {
          let x: number = p5.map(i, 0, numPoints-1, 0, width); //2000 is the width of the canvas.
          let y: number = height/2 + p5.random(-height/5, height/5) * p5.sin(p5.map(i, 0, numPoints-1, 0, 3*p5.PI)) * p5.map(p5.abs(i-numPoints/2), 0, numPoints/2, 1, 0.2);
          let a = p5.random(10,50);
          amplitude.push(a);
          points.push({x, y})
      }       
  }

  p5.draw = () => {
    p5.background(0);
    p5.noStroke();
    p5.fill(255);
    for (let i = 0; i < numPoints; i++) {
      let x = points[i].x;
      let y = points[i].y;
      let a = amplitude[i];

      const xAngle = p5.map(p5.mouseX, 0, width, -4 * p5.PI, 4 * p5.PI, true);
      const yAngle = p5.map(p5.mouseY, 0, width, -6 * p5.PI, 4 * p5.PI, true);

      points[i].y += a * p5.sin(((p5.frameCount/50)/2 + i)*10) * 0.025;
      points[i].x += a * p5.sin(((p5.frameCount/50)/2 + i)*xAngle) * 0.025;
      p5.ellipse(x, points[i].y + (yAngle/3 * xAngle/3),2);
    }
  }
};

// const newSketch: Sketch = (p5) => {
//     let numPoints: number = 500;
//     let points: any = [];
//     let amplitude: any = [];
//     let width: number = 2000;
//     let height: number = 400;

//     p5.setup = () => {
//         p5.createCanvas(width, height);
//         for (let i=0; i < numPoints; i++) {
//             let x: number = p5.map(i, 0, numPoints-1, 0, width); //2000 is the width of the canvas.
//             let y: number = height/2 + p5.random(-height/5, height/5) * p5.sin(p5.map(i, 0, numPoints-1, 0, 3*p5.PI)) * p5.map(p5.abs(i-numPoints/2), 0, numPoints/2, 1, 0.2);
//             let a = p5.random(10,50);
//             amplitude.push({x, y});
//         }       
//     }

//     p5.draw = () => {
//       p5.background(0);
//       p5.noStroke();
//       p5.fill(255);
//       for (let i = 0; i < numPoints; i++) {
//         let x = points[i].x;
//         let y = points[i].y;
//         let a = amplitude[i];

//         const xAngle = p5.map(p5.mouseX, 0, width, -4 * p5.PI, 4 * p5.PI, true);
//         const yAngle = p5.map(p5.mouseY, 0, width, -6 * p5.PI, 4 * p5.PI, true);

//         points[i].y += a * p5.sin(((p5.frameCount/50)/2 + i)*10) * 0.025;
//         points[i].x += a * p5.sin(((p5.frameCount/50)/2 + i)*xAngle) * 0.025;
//         p5.ellipse(x, points[i].y + (yAngle/3 * xAngle/3),2);
//       }
//     }
// }


const P5Test: React.FC = () => {
  return <ReactP5Wrapper sketch={sketch} />;
};

export default P5Test;
