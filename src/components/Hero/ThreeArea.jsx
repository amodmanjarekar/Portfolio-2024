import {
  Center,
  // Text,
  // Text3D
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function ThreeArea() {
  const textRef = useRef();

  const ThreeMesh = () => {
    useFrame(({ mouse, viewport }) => {
      const x = (mouse.x * viewport.width) / 2.5;
      const y = (mouse.y * viewport.height) / 2.5;
      textRef.current.lookAt(x, y, 5);

      textRef.current.position.x = -mouse.x * 2;
      textRef.current.position.y = -mouse.y * 0.5;
      textRef.current.scale.x = 1.5 + window.scrollY * 0.005;
      textRef.current.scale.y = 1.5 + window.scrollY * 0.005;
      textRef.current.scale.z = 1.5 + window.scrollY * 0.005;
    });

    return (
      <Center>
        <mesh ref={textRef} scale={1}>
          {/* <Text3D
            font={
              "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
            }
            scale={1}
          >
            A
          </Text3D> */}
          <torusGeometry />
          <meshStandardMaterial color="#ffcaca" />
        </mesh>
      </Center>
    );
  };

  return (
    <div className="canvas-container">
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight color="#f00" />
        <ThreeMesh />
      </Canvas>
    </div>
  );
}

export default ThreeArea;
