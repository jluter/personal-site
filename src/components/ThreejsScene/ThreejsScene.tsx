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
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

    const fragmentShader = `
    varying vec2 vUv;
    uniform float time;
    
    float rand(float n){return fract(sin(n) * 43758.5453123);}
    
    float noise(in vec2 x)
    {
        vec2 p = floor(x);
        vec2 f = fract(x);
        f = f*f*(3.0-2.0*f);
    
        float n = p.x + p.y*57.0;
    
        return mix(mix(rand(n+  0.0), rand(n+  1.0),f.x),
                   mix(rand(n+ 57.0), rand(n+ 58.0),f.x),f.y);
    }
    
    void main() {
        float noiseVal = noise(vUv * 10.0 + time * 0.5);
        vec3 color = vec3(noiseVal * 0.5 + 0.5);
        gl_FragColor = vec4(color, 1.0);
    }
`;


    const material = new THREE.ShaderMaterial ({
      uniforms: {
        time: { value: 0.0 }
      },
      vertexShader,
      fragmentShader
    });


    const sphere = new THREE.Mesh (geometry, material);
    scene.add(sphere);

    const animate = () => {
      requestAnimationFrame( animate );

      material.uniforms.time.value += 0.01;
      
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
