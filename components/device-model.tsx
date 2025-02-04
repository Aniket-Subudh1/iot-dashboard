"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Box } from "@react-three/drei"
import * as THREE from "three"

function DeviceBox() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <Box ref={meshRef} args={[1, 1, 1]} scale={1.5}>
      <meshStandardMaterial color="#4CAF50" />
    </Box>
  )
}

export function DeviceModel() {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <DeviceBox />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

