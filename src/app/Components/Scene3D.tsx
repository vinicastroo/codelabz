'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

type ModelProps = {
  url?: string;
};

function Model({ url = '/models/modelo.glb' }: ModelProps) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} scale={6} />;
}

// Ajuda o Next a fazer preload do modelo
useGLTF.preload('/models/modelo.glb');

export function Scene3D() {
  return (
    <div style={{ width: '100%', height: '90vh' }} >
      <Canvas camera={{ position: [0, 1.5, 3], fov: 60 }}>
        {/* Luzes */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 7.5]} intensity={1} />

        {/* Modelo */}
        <Model />

        {/* Controles de câmera (mouse) */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
