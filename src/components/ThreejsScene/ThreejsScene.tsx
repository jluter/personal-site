import React, { useRef, useEffect} from "react";
import './ThreejsScene.scss';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import grain from '../../assets/images/blur.jpg';

interface Props {
  mainElementWidth: number;
  mainElementHeight: number;
}

//Types for getting mouse position
// interface MousePosition {
//   x: number;
//   y: number;
// }

const ThreejsScene: React.FC<Props> = ({mainElementWidth, mainElementHeight}) => {
  
  //Code to get value of mouse position
  // const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  // useEffect(() => {

  //   const handleMouseMove = (event: MouseEvent) => {
  //     event.preventDefault();
  //     setPosition({ x: event.clientX, y: event.clientY });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   }
  // }, []);

  const canvasRef = useRef<HTMLDivElement>(null); //Tells React where to mount three.js scene/canvas
  


  useEffect(() => {
    const scene = new THREE.Scene();
    
    const canvas = canvasRef.current;
    const camera = new THREE.PerspectiveCamera(
     50, 
      mainElementWidth / mainElementHeight,
      0.01,
      1000
      );
      camera.position.z = 5;

      
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(mainElementWidth, mainElementHeight);
      renderer.setClearColor(0x000000, 0);
    if (canvas) {
      canvas.appendChild(renderer.domElement);

    }

    const controls = new OrbitControls(camera, renderer.domElement);
    const geometry = new THREE.SphereGeometry( 1, 64, 64);
    
    const vertexShader = `
    varying vec2 vUv;

    varying vec2 vScreenSpace;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vNormal = normal;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vScreenSpace = gl_Position.xy/gl_Position.w;
    }
`;

    const fragmentShader = `
    varying vec2 vUv;
    uniform float time;
    uniform sampler2D grainTexture;
    
    varying vec2 vScreenSpace;
    varying vec3 vNormal;
    varying vec3 vPosition;

// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/stegu/webgl-noise
//

    vec3 mod289(vec3 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x)
    {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x)
    {
      return mod289(((x*34.0)+10.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r)
    {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    vec3 fade(vec3 t) {
      return t*t*t*(t*(t*6.0-15.0)+10.0);
    }
    
    // Classic Perlin noise
    float cnoise(vec3 P)
    {
      vec3 Pi0 = floor(P); // Integer part for indexing
      vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
      Pi0 = mod289(Pi0);
      Pi1 = mod289(Pi1);
      vec3 Pf0 = fract(P); // Fractional part for interpolation
      vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;
    
      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);
    
      vec4 gx0 = ixy0 * (1.0 / 7.0);
      vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    
      vec4 gx1 = ixy1 * (1.0 / 7.0);
      vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.5);
      gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    
      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
    
      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
      g000 *= norm0.x;
      g010 *= norm0.y;
      g100 *= norm0.z;
      g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
      g001 *= norm1.x;
      g011 *= norm1.y;
      g101 *= norm1.z;
      g111 *= norm1.w;
    
      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);
    
      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
      return 2.2 * n_xyz;
    }
    
    void main() {
        // float noiseVal = noise(vUv * 10.0 + time * 0.5);
        vec3 position = vPosition;
        float noiseVal = cnoise(position * 10.0);
        vec3 color = vec3(noiseVal * 0.5 + 0.5);


        float light = dot(vNormal * (sin(vScreenSpace.x) *0.5 + 0.5) + 0.75, normalize(vec3(0.0, 0.0, 0.5)));

        float ttt = texture2D(grainTexture, vScreenSpace + 1.0).r;

        //strokes
        float stroke = cos((vScreenSpace.x - vScreenSpace.y) * 500.0);

        float smallNoise = cnoise(vec3(vScreenSpace * 400.0, 1.0)) * 0.5 + 0.5;
        float bigNoise = cnoise(vec3(vScreenSpace * 5.0, 1.0)) * 0.5 + 0.5;
        
        light += sin(bigNoise * 2.0 - 1.0) + ttt;
        
        stroke += (smallNoise - sin(stroke)) + (bigNoise - cos(stroke) * 0.5); 
        stroke = smoothstep(light - 0.5, light + 0.5,stroke);

        gl_FragColor = vec4(vNormal, 1.0);
        gl_FragColor = vec4(vScreenSpace, 0.0, 1.0);
        gl_FragColor = vec4(vec3(light), 1.0);
        gl_FragColor = vec4(vec3(ttt), 1.0);
        gl_FragColor = vec4(vec3(stroke), 0.85);
        // gl_FragColor = vec4(vec3(smallNoise * 0.5 + 0.5), 1.0);
        // gl_FragColor = vec4(vec3(bigNoise * 0.5 + 0.5), 1.0);
    }
`;


    const material = new THREE.ShaderMaterial ({
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0.0 },
        map: { value: new THREE.TextureLoader().load(grain) }
      },
      vertexShader,
      fragmentShader
    });

  
    const sphere = new THREE.Mesh (geometry, material);
    const sphereClone = new THREE.Mesh(new THREE.SphereGeometry( 0.33, 64, 64), material)

    scene.add(sphere);
    scene.add(sphereClone);

    
    
    const animate = () => {
      
      controls.update();
      
      requestAnimationFrame( animate );
      let radius = 1.5;
      let date = Date.now() * 0.00077;
      sphereClone.position.set(
        Math.cos(date) * radius, Math.cos(date) , Math.sin(date) * radius
      );
      sphereClone.rotation.y += 0.0005;

      material.uniforms.time.value += 0.1;

      sphere.rotation.x += 0.00066
      sphere.rotation.y += 0.0033;
      // sphere.rotation.z += 0.5;
      // sphere.position.x = -1;
      // sphere.position.y = -0.5;

      // camera.position.z += Math.cos(sphere.rotation.y) * 0.005;
      // camera.position.z = 1;

      
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
  }, [mainElementWidth, mainElementHeight]);

  return (
      <div className="three-js" ref={canvasRef}></div>
  );
};

export default ThreejsScene;
