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

// Helper: Network Mesh Shape (Data Nodes with connections)
const getNetworkShape = (count: number) => {
  const positions = new Float32Array(count * 3);

  // Create network nodes distributed in 3D space
  const nodeCount = 12; // Major hub nodes
  const nodes: { x: number; y: number; z: number }[] = [];

  // Generate node positions spread out in 3D
  for (let n = 0; n < nodeCount; n++) {
    const theta = (n / nodeCount) * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const r = 1.5 + Math.random() * 0.5;
    nodes.push({
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi)
    });
  }

  for (let i = 0; i < count; i++) {
    let px, py, pz;
    const rand = Math.random();

    if (rand < 0.35) {
      // Particles clustered around nodes (hub effect)
      const nodeIdx = Math.floor(Math.random() * nodeCount);
      const node = nodes[nodeIdx];
      const spread = 0.25;
      px = node.x + (Math.random() - 0.5) * spread;
      py = node.y + (Math.random() - 0.5) * spread;
      pz = node.z + (Math.random() - 0.5) * spread;
    } else if (rand < 0.7) {
      // Particles along edges (connections between nodes)
      const nodeA = nodes[Math.floor(Math.random() * nodeCount)];
      const nodeB = nodes[Math.floor(Math.random() * nodeCount)];
      const t = Math.random();
      const offset = 0.08;
      px = nodeA.x + (nodeB.x - nodeA.x) * t + (Math.random() - 0.5) * offset;
      py = nodeA.y + (nodeB.y - nodeA.y) * t + (Math.random() - 0.5) * offset;
      pz = nodeA.z + (nodeB.z - nodeA.z) * t + (Math.random() - 0.5) * offset;
    } else {
      // Scattered ambient particles for "data flow" feel
      const r = Math.pow(Math.random(), 0.5) * 2.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      px = r * Math.sin(phi) * Math.cos(theta);
      py = r * Math.sin(phi) * Math.sin(theta);
      pz = r * Math.cos(phi);
    }

    positions[i * 3] = px;
    positions[i * 3 + 1] = py;
    positions[i * 3 + 2] = pz;
  }
  return positions;
};

// Helper: Envelope / Letter Shape (✉️)
const getEnvelopeShape = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const z = (Math.random() - 0.5) * 0.3;
    let px, py;
    const rand = Math.random();

    if (rand < 0.55) {
      // Envelope body (rectangle)
      px = (Math.random() - 0.5) * 3.2;
      py = (Math.random() - 0.5) * 2.0 - 0.3;
    } else if (rand < 0.90) {
      // Envelope flap (V-shape / inverted triangle on top)
      const r1 = Math.random();
      const r2 = Math.random();
      const sqrtR1 = Math.sqrt(r1);
      // Triangle vertices: top-left, top-right, center-bottom (V tip)
      const A = { x: -1.6, y: 0.7 };
      const B = { x: 1.6, y: 0.7 };
      const C = { x: 0, y: -0.3 };

      px = (1 - sqrtR1) * C.x + (sqrtR1 * (1 - r2)) * A.x + (sqrtR1 * r2) * B.x;
      py = (1 - sqrtR1) * C.y + (sqrtR1 * (1 - r2)) * A.y + (sqrtR1 * r2) * B.y;
    } else {
      // Letter paper peeking out from the top
      px = (Math.random() - 0.5) * 2.4;
      py = 0.7 + Math.random() * 1.2;
    }

    positions[i * 3] = px;
    positions[i * 3 + 1] = py;
    positions[i * 3 + 2] = z;
  }
  return positions;
};

// Helper: Barcode Shape (|||||| pattern)
const getBarcodeShape = (count: number) => {
  const positions = new Float32Array(count * 3);

  // Define barcode bars — alternating thick and thin bars with gaps
  const bars: { x: number; width: number }[] = [];
  const barPattern = [
    0.8, 0.3, 0.5, 0.3, 0.9, 0.3, 0.4, 0.3, 0.7, 0.3,
    0.6, 0.3, 0.8, 0.3, 0.5
  ]; // widths: thick bars alternate with thin gaps
  let cursor = -2.2; // Start from left
  for (let b = 0; b < barPattern.length; b++) {
    if (b % 2 === 0) {
      // Bar
      bars.push({ x: cursor + barPattern[b] / 2, width: barPattern[b] });
    }
    cursor += barPattern[b] * 0.58; // Spacing factor
  }

  const barHeight = 3.2;

  for (let i = 0; i < count; i++) {
    const z = (Math.random() - 0.5) * 0.25;

    // Pick a random bar, weighted by width (thicker bars get more particles)
    const totalWidth = bars.reduce((sum, bar) => sum + bar.width, 0);
    let r = Math.random() * totalWidth;
    let selectedBar = bars[0];
    for (const bar of bars) {
      r -= bar.width;
      if (r <= 0) {
        selectedBar = bar;
        break;
      }
    }

    // Distribute particle within the selected bar
    const px = selectedBar.x + (Math.random() - 0.5) * selectedBar.width * 0.18;
    const py = (Math.random() - 0.5) * barHeight;

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
  const viewport = useThree((state) => state.viewport);
  const scale = Math.min(viewport.width / 8, 0.75);

  // Memoize shapes to avoid recalculation
  const shapes = useMemo(() => {
    return [
      getGalaxyShape(PARTICLE_COUNT),
      getArrowShape(PARTICLE_COUNT),
      getHouseShape(PARTICLE_COUNT),
      getDocumentShape(PARTICLE_COUNT),
      getMarkerShape(PARTICLE_COUNT),
      getNetworkShape(PARTICLE_COUNT),
      getEnvelopeShape(PARTICLE_COUNT),
      getBarcodeShape(PARTICLE_COUNT),
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

    // Calculate breathing/pulse factor for network shape (index 5)
    const isNearNetwork = safeIndex >= 4.5;
    const networkInfluence = isNearNetwork ? Math.min((safeIndex - 4.5) * 2, 1) : 0;
    const breathingScale = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.04 * networkInfluence;

    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      // Simple linear interpolation
      currentPositions[i] = THREE.MathUtils.lerp(shapeA[i], shapeB[i], progress);

      // Apply breathing pulse effect for network shape
      if (networkInfluence > 0) {
        currentPositions[i] *= breathingScale;
      }

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