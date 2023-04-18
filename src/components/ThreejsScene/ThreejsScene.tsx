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

    const geometry = new THREE.BoxGeometry( 1, 2, 1.5);
    const material = new THREE.MeshBasicMaterial ( {color: 0x00ff00} );
    const cube = new THREE.Mesh (geometry, material);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    }

    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener("resize", onWindowResize, false);

    animate();

    const test2 = document.getElementById("test2")

    return () => {
      if (canvas) {

        canvas.removeChild( renderer.domElement );
    }};
  }, []);

  return (
      <div id="test2" ref={canvasRef}></div>
  );
};

export default ThreejsScene;
