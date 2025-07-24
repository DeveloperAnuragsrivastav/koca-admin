import { Canvas } from '@react-three/fiber';
import { Float, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D floating object component
function FloatingObject({ position, color = '#FFD700', scale = 1 }: { 
  position: [number, number, number], 
  color?: string, 
  scale?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[0, 0.5]}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.8} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

// 3D Scene with floating objects
const ThreeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Multiple floating objects */}
      <FloatingObject position={[-3, 2, 0]} color="#FFD700" scale={0.8} />
      <FloatingObject position={[3, -1, 1]} color="#FFA500" scale={0.6} />
      <FloatingObject position={[-2, -2, -1]} color="#FFB347" scale={0.7} />
      <FloatingObject position={[2, 3, 0.5]} color="#FFCC33" scale={0.5} />
      <FloatingObject position={[0, -3, 1]} color="#FFE55C" scale={0.9} />
    </Canvas>
  );
};

export default ThreeScene;