import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const generateValidPositions = (numPoints, radius) => {
  const positions = new Float32Array(numPoints * 3);

  for (let i = 0; i < numPoints * 3; i += 3) {
    let x, y, z;

    // Generate random coordinates within the sphere with radius
    do {
      x = (Math.random() - 0.5) * radius * 2; // Rango [-radius, radius]
      y = (Math.random() - 0.5) * radius * 2; // Rango [-radius, radius]
      z = (Math.random() - 0.5) * radius * 2; // Rango [-radius, radius]
    } while (x * x + y * y + z * z > radius * radius); // Check if coordinates are inside the sphere

    positions[i] = x;
    positions[i + 1] = y;
    positions[i + 2] = z;
  }

  return positions;
};

const Stars = (props) => {
  const ref = useRef();
  const numPoints = 5000;
  const radius = 1.2;
  const [sphere] = useState(() => generateValidPositions(numPoints, radius));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
