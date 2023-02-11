import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import React, { Suspense } from "react";
import Model from "./Model";
import Placeholder from "./Placeholder";

function Experience() {
  return (
    <>
      <Perf position="top-left" />
      <color args={["#252771"]} attach="background" />

      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />

      <OrbitControls makeDefault />

      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 1]} />}>
        <Model />
      </Suspense>
    </>
  );
}

export default Experience;
