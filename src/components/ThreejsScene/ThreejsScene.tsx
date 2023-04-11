import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import grain from '../../assets/images/grain.jpg';

const ThreejsScene: React.FC = () => {

// const scene: any = () => {
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );

//   const renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   const geometry = new THREE.BoxGeometry(1, 1, 1);
//   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//   const cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);

//   camera.position.z = 5;

//   function animate() {
//     requestAnimationFrame(animate);

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render(scene, camera);
//   }

//   animate();
// };

const newScene: any = () => {
  // Scene
const scene = new THREE.Scene();

// Camera
const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 10;

// Disc
const radius = 5;
const depth = 1;
const segments = 32;
const shape = new THREE.Shape();
shape.moveTo(radius, 0);
for (let i = 1; i <= segments; i++) {
  const theta = (i / segments) * Math.PI * 2;
  const x = radius * Math.cos(theta);
  const y = radius * Math.sin(theta);
  shape.lineTo(x, y);
}
const extrudeSettings = { depth: depth, bevelEnabled: false };
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const texture = new THREE.TextureLoader().load(grain);

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(radius * 2, radius * 2);

const material = new THREE.MeshBasicMaterial({ map: texture });
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = -Math.PI / 4;
scene.add(mesh);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Animation loop
const animate = function () {
  requestAnimationFrame(animate);
  const angle = Date.now() * 0.001;
  mesh.rotation.z = angle/5;
  renderer.render(scene, camera);
};

animate();
}
  return (
    <div>
      {/* <script type="module" src={scene()}></script> */}
      BREAK
      <script type='module' src={newScene()}></script>
    </div>
  );
};

export default ThreejsScene;
