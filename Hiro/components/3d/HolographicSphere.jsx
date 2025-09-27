import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Edges } from '@react-three/drei';
import * as THREE from 'three';

const SphereContent = () => {
    const meshRef = useRef();
    const edgesRef = useRef();

    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
            // Breathing effect
            const scale = 1 + Math.sin(time) * 0.05;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group>
            <Icosahedron ref={meshRef} args={[1.5, 5]}>
                <meshStandardMaterial
                    color="#101020"
                    transparent
                    opacity={0.3}
                    roughness={0.2}
                    metalness={0.8}
                />
                 <Edges ref={edgesRef} scale={1.001} threshold={15}>
                    <lineBasicMaterial color="#7928CA" toneMapped={false} />
                </Edges>
            </Icosahedron>
        </group>
    );
};

const HolographicSphere = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} color="#0066FF" intensity={2} />
            <pointLight position={[-10, -10, -10]} color="#7928CA" intensity={2} />
            <SphereContent />
        </Canvas>
    );
};

export default HolographicSphere;