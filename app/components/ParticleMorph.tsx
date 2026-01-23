"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Constants
const PARTICLE_COUNT = 8000;
const RADIUS = 1.45; // Base radius for shapes

// Helper: Random point in sphere (Galaxy)
const getGalaxyShape = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const r = Math.pow(Math.random(), 1 / 3) * RADIUS * 1.5; // Slightly larger for galaxy

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

// Helper: Arrow Up Shape
const getArrowShape = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 3;
    const y = (Math.random() - 0.5) * 3;
    const z = (Math.random() - 0.5) * 0.5; // Thin depth

    // Triangle top (y > 0), Rectangle bottom (y <= 0)
    let px, py;

    if (Math.random() > 0.4) {
      // Triangle part
      const r1 = Math.random();
      const r2 = Math.random();
      const sqrtR1 = Math.sqrt(r1);
      const A = { x: -1.5, y: 0 };
      const B = { x: 1.5, y: 0 };
      const C = { x: 0, y: 2.5 };

      px = (1 - sqrtR1) * C.x + (sqrtR1 * (1 - r2)) * A.x + (sqrtR1 * r2) * B.x;
      py = (1 - sqrtR1) * C.y + (sqrtR1 * (1 - r2)) * A.y + (sqrtR1 * r2) * B.y;
    } else {
      // Stem part
      px = (Math.random() - 0.5) * 1.2;
      py = Math.random() * -2.0;
    }

    positions[i * 3] = px;
    positions[i * 3 + 1] = py;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

// Helper: House Shape
const getHouseShape = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const z = (Math.random() - 0.5) * 0.5;
    let px, py;

    if (Math.random() > 0.4) {
      // Roof (Triangle)
      const r1 = Math.random();
      const r2 = Math.random();
      const sqrtR1 = Math.sqrt(r1);
      const A = { x: -1.8, y: 0.5 };
      const B = { x: 1.8, y: 0.5 };
      const C = { x: 0, y: 2.5 };

      px = (1 - sqrtR1) * C.x + (sqrtR1 * (1 - r2)) * A.x + (sqrtR1 * r2) * B.x;
      py = (1 - sqrtR1) * C.y + (sqrtR1 * (1 - r2)) * A.y + (sqrtR1 * r2) * B.y;
    } else {
      // Body (Square)
      px = (Math.random() - 0.5) * 3.0;
      py = (Math.random() * 2.5) - 2.0;
    }

    positions[i * 3] = px;
    positions[i * 3 + 1] = py;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

// Helper: Document Shape
const getDocumentShape = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const z = (Math.random() - 0.5) * 0.2;
    // Rectangle with aspect ratio of a paper
    positions[i * 3] = (Math.random() - 0.5) * 2.5; // Width
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3.5; // Height
    positions[i * 3 + 2] = z;
  }
  return positions;
};

// Helper: Map Marker Shape
const getMarkerShape = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const z = (Math.random() - 0.5) * 0.5;
    let px, py;

    if (Math.random() > 0.3) {
      // Top Circle
      const r = Math.sqrt(Math.random()) * 1.5;
      const theta = Math.random() * 2 * Math.PI;
      px = r * Math.cos(theta);
      py = r * Math.sin(theta) + 0.5;
    } else {
      // Bottom Triangle (Pointer)
      const r1 = Math.random();
      const r2 = Math.random();
      const sqrtR1 = Math.sqrt(r1);
      const A = { x: -1.4, y: 0.5 }; // Connects to circle roughly
      const B = { x: 1.4, y: 0.5 };
      const C = { x: 0, y: -2.5 }; // Tip

      px = (1 - sqrtR1) * C.x + (sqrtR1 * (1 - r2)) * A.x + (sqrtR1 * r2) * B.x;
      py = (1 - sqrtR1) * C.y + (sqrtR1 * (1 - r2)) * A.y + (sqrtR1 * r2) * B.y;
    }

    positions[i * 3] = px;
    positions[i * 3 + 1] = py;
    positions[i * 3 + 2] = z;
  }
  return positions;
};


interface ParticleMorphProps {
  scrollProgress: React.MutableRefObject<number>;
}

export default function ParticleMorph({ scrollProgress }: ParticleMorphProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Memoize shapes to avoid recalculation
  const shapes = useMemo(() => {
    return [
      getGalaxyShape(PARTICLE_COUNT),
      getArrowShape(PARTICLE_COUNT),
      getHouseShape(PARTICLE_COUNT),
      getDocumentShape(PARTICLE_COUNT),
      getMarkerShape(PARTICLE_COUNT),
    ];
  }, []);

  // Use a Float32Array for the current positions to update efficiently
  const currentPositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    // Read the current scroll index from the ref
    const scrollIndex = scrollProgress.current;

    // Determine which two shapes we are interpolating between
    // Clamp scrollIndex between 0 and shapes.length - 1
    const safeIndex = Math.max(0, Math.min(scrollIndex, shapes.length - 1));
    const previousShapeIndex = Math.floor(safeIndex);
    const nextShapeIndex = Math.min(previousShapeIndex + 1, shapes.length - 1);

    const progress = safeIndex - previousShapeIndex; // 0.0 to 1.0

    // Lerp positions
    const shapeA = shapes[previousShapeIndex];
    const shapeB = shapes[nextShapeIndex];

    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      // Simple linear interpolation
      currentPositions[i] = THREE.MathUtils.lerp(shapeA[i], shapeB[i], progress);

      // Add a tiny bit of wave/breath motion
      if (i % 3 === 1) { // Y-axis
        currentPositions[i] += Math.sin(state.clock.elapsedTime + currentPositions[i - 1]) * 0.02;
      }
    }

    // Update geometry
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group scale={0.75}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={currentPositions}
            itemSize={3}
            args={[currentPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#FFFFFF"
          sizeAttenuation={true}
          depthWrite={false}
          transparent={true}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}