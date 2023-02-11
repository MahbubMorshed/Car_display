import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import { Model } from "./Car";

export default function Container() {
  return (
    <>
      <div className="container" style={{ background: "aliceblue" }}>
        <Canvas shadows camera={{ position: [4, 0, -12], fov: 35 }}>
          <Stage
            intensity={1.5}
            environment="city"
            shadows={{ type: "accumulative", colorBlend: 2, opacity: 2 }}
            adjustCamera={0.9}
          >
            <Model />
          </Stage>
          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </>
  );
}
