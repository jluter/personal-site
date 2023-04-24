varying vec2 vUv;

varying vec2 vScreenSpace;
varying vec3 vNormal;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vNormal = normal;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  vScreenSpace = gl_Position.xy / gl_Position.w;
}

export default vertexShader;