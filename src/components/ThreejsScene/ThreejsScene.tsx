import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreejsScene: React.FC = () => {
  
  const canvasRef = useRef<HTMLDivElement>(null); //Tells React where to mount three.js scene/canvas
  
  useEffect(() => {
    const scene = new THREE.Scene();
    
    const canvas = canvasRef.current;
    const camera = new THREE.PerspectiveCamera(
      50, 
      window.innerWidth / 
      window.innerHeight,
      0.001,
      1000
      );
      camera.position.z = 5;
      
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
    if (canvas) {
      canvas.appendChild(renderer.domElement);

    }

    const geometry = new THREE.SphereGeometry( 1, 30, 30);

    const vertexShader = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

    const fragmentShader = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;


    const material = new THREE.ShaderMaterial ({
      vertexShader,
      fragmentShader
    });


    const sphere = new THREE.Mesh (geometry, material);
    scene.add(sphere);

    const animate = () => {
      requestAnimationFrame( animate );

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render( scene, camera );
    }

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener("resize", onWindowResize, false);

    animate();


    return () => {
      if (canvas) {

        canvas.removeChild( renderer.domElement );
    }};
  }, []);

  return (
      <div ref={canvasRef}></div>
  );
};

export default ThreejsScene;
