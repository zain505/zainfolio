import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, SpotLight, Html, Lightformer } from "@react-three/drei";
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { useRef } from "react";

import myWorkUrl from "./assets/my-work.png";

export default function ProjectorScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2.2, 6], fov: 40 }}
    >
      {/* Dark mood background */}
      <color attach="background" args={["#000000"]} />

      {/* Ambient soft light */}
      <ambientLight intensity={0.2} />

      {/* Light bounce environment */}
      <Environment preset="studio" />

      {/* Projector */}
      <Projector />

      {/* Screen with image */}
      <Screen />

      {/* 3D Floor for realism */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Camera controls */}
      {/* <OrbitControls enablePan={false} maxPolarAngle={1.4} /> */}

      {/* Post processing (movie-like effects) */}
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.2} />
        <ChromaticAberration offset={[0.0015, 0.001]} />
        <Vignette eskil={false} offset={0.25} darkness={0.8} />
      </EffectComposer>
    </Canvas>
  );
}

function Projector() {
  const lightRef = useRef();
  const coneRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(t * 0.4) * 1.2;
    }
  });

  return (
    <>
      {/* Light Source */}
      <spotLight
        ref={lightRef}
        position={[0, 2.5, 3]}
        angle={0.35}
        penumbra={0.5}
        intensity={6}
        castShadow
        color={"#ffffff"}
      />

      {/* Volumetric Light Cone */}
      <mesh ref={coneRef} position={[0, 2.5, 3]} rotation={[-Math.PI / 2.4, 0, 0]}>
        <coneGeometry args={[1.2, 3.5, 64, 1, true]} />
        <meshBasicMaterial
          color="#5fa8ff"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Projector Body */}
      <mesh position={[0, 2.5, 3]}>
        <cylinderGeometry args={[0.25, 0.25, 0.8, 32]} />
        <meshStandardMaterial color="#111926" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Glowing Lens */}
      <mesh position={[0, 2.5, 3.45]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color="#7fc8ff" emissive="#7fc8ff" emissiveIntensity={3} />
      </mesh>
    </>
  );
}

function Screen() {
  const texture = useLoader(THREE.TextureLoader, myWorkUrl);

  return (
    <mesh position={[0, 2, -1]} receiveShadow>
      <planeGeometry args={[4, 2.3]} />
      <meshStandardMaterial
        map={texture}
        emissive="#ffffff"
        emissiveIntensity={0.5}
        toneMapped={true}
      />
    </mesh>
  );
}
