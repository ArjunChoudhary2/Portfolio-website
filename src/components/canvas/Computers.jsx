import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  console.log(computer);
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={4} />
      <spotLight  angle={0.12} castShadow penumbra={1} intensity={1} />
      <primitive
        object={computer.scene}
        scale={.55}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  );
};

export const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
export default Computers;
