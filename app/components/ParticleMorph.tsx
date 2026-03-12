"use client";

import React, { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
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

// Helper: Dollar Sign Shape ($) — continuous S-curve + vertical stroke
const getDollarShape = (count: number) => {
  const positions = new Float32Array(count * 3);
  const s = 1.6;

  for (let i = 0; i < count; i++) {
    const z = (Math.random() - 0.5) * 0.25;
    let px: number, py: number;

    const r = Math.random();

    if (r < 0.12) {
      // Vertical stroke through center
      px = (Math.random() - 0.5) * 0.1;
      py = (Math.random() - 0.5) * 2.6;
    } else {
      // Single continuous S-curve using sine
      // t goes from bottom to top — wider range = more S-like
      const t = (Math.random() * 3.6 - 1.8);
      // Sine gives us the S shape; amplitude controls width
      px = Math.sin(t * Math.PI / 1.5) * 0.5;
      py = t * 0.65; // squash vertically for a stubbier S
      // Add slight thickness
      px += (Math.random() - 0.5) * 0.18;
      py += (Math.random() - 0.5) * 0.1;
    }

    positions[i * 3] = px * s;
    positions[i * 3 + 1] = py * s;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

// Helper: Document Shape
const getDocumentShape = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const z = (Math.random() - 0.5) * 0.2;
    positions[i * 3] = (Math.random() - 0.5) * 2.5;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

interface ParticleMorphProps {
  targetShapeIndex: number; // 0 = Galaxy, 1 = Dollar (Business), 2 = Document (Dev)
}

export default function ParticleMorph({ targetShapeIndex }: ParticleMorphProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const viewport = useThree((state) => state.viewport);
  const scale = Math.min(viewport.width / 8, 0.75);

  // Smooth animation tracking
  const currentIndex = useRef(0);

  // Memoize shapes to avoid recalculation
  const shapes = useMemo(() => {
    return [
      getGalaxyShape(PARTICLE_COUNT),   // 0: Hero / initial
      getDollarShape(PARTICLE_COUNT),   // 1: Business
      getDocumentShape(PARTICLE_COUNT), // 2: Development
    ];
  }, []);

  // Use a Float32Array for the current positions to update efficiently
  const currentPositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    // Smoothly animate currentIndex toward targetShapeIndex
    const speed = 0.03; // Controls morph speed (lower = smoother)
    const diff = targetShapeIndex - currentIndex.current;
    if (Math.abs(diff) > 0.001) {
      currentIndex.current += diff * speed;
    } else {
      currentIndex.current = targetShapeIndex;
    }

    const scrollIndex = currentIndex.current;

    // Determine which two shapes we are interpolating between
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
    <group scale={scale}>
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