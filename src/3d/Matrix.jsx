// src/components/MatrixVoidScene.jsx
import React, { Suspense, useRef,useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, useAnimations } from "@react-three/drei";
import modelPath from "../assets/matrix_void.glb";

function Model({ url }) {
    const group = useRef();
    const { scene, animations } = useGLTF(url);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        // Play all animations
        if (actions) {
            Object.values(actions).forEach(action => action.play());
        }
    }, [actions]);

    return <primitive ref={group} object={scene} scale={1} />;
}

export default function MatrixVoidScene() {
    return (
        <Canvas
            camera={{ position: [0, 1, 5], fov: 100 }}
            style={{ width: "100%", height: "50vh" }}
        >
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            {/* Model */}
            <Suspense fallback={<Html>Loading...</Html>}>
                <Model url={modelPath} />
            </Suspense>

            {/* Controls */}
            {/* <OrbitControls /> */}
        </Canvas>
    );
}
