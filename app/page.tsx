"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleMorph from "./components/ParticleMorph";
import ProjectModal from "./components/ProjectModal";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useRef(0); // This ref drives the 3D animation without re-renders
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smooth scrubbing
        onUpdate: (self) => {
          scrollProgress.current = self.progress * 7;
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative w-full bg-black text-white selection:bg-white selection:text-black font-sans">

      {/* 3D Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none md:pointer-events-auto md:cursor-move" style={{ touchAction: 'pan-y' }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 35 }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#000000"]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
            enableDamping={true}
            dampingFactor={0.05}
            enableRotate={typeof window !== 'undefined' && window.innerWidth >= 768}
          />
          <ParticleMorph scrollProgress={scrollProgress} />
        </Canvas>
      </div>

      <ProjectModal
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Social Dock (Fixed Footer) */}
      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-8 mix-blend-difference">
        <a
          href="https://github.com/jeongminnnnni"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light tracking-widest text-white/50 hover:text-white transition-all duration-300 relative group"
        >
          GITHUB
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <div className="w-[1px] h-3 bg-white/20"></div>
        <a
          href="https://www.youtube.com/@jeongminnnnnni"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light tracking-widest text-white/50 hover:text-white transition-all duration-300 relative group"
        >
          YOUTUBE
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <div className="w-[1px] h-3 bg-white/20"></div>
        <a
          href="https://www.notion.so/2b561551fdde80bba01ef70538fc2c81?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light tracking-widest text-white/50 hover:text-white transition-all duration-300 relative group"
        >
          NOTION
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </footer>

      {/* Scrollable Content Layer */}
      <div ref={containerRef} className="relative z-10 pointer-events-none">

        {/* Section 1: Hero */}
        <section className="h-screen w-full relative flex flex-col justify-end p-12 md:p-24 border-b border-white/5">
          <div className="max-w-2xl pointer-events-auto">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 leading-[0.9]">
              Product<br />Engineer
            </h1>
            <p className="text-sm md:text-base opacity-70 font-mono mt-10">
              Bridging Art, Technology, and Business
            </p>
          </div>
        </section>

        {/* Section 2: Next Career */}
        <section className="h-screen w-full relative flex flex-col justify-end p-12 pb-28 md:p-24 border-b border-white/5">
          <div className="max-w-2xl pointer-events-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">Next Career</h2>
            <p className="text-xl md:text-2xl opacity-60 mb-8 font-light">AI Tech Pipeline Design</p>
            <button
              onClick={() => setSelectedProject('nextcareer')}
              className="group px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase flex items-center gap-2"
            >
              View Project
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </button>
          </div>
        </section>

        {/* Section 3: 둥지동지 */}
        <section className="h-screen w-full relative flex flex-col justify-end p-12 pb-28 md:p-24 border-b border-white/5">
          <div className="max-w-2xl pointer-events-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">둥지동지</h2>
            <p className="text-xl md:text-2xl opacity-60 mb-8 font-light">Service Stabilization</p>
            <button
              onClick={() => setSelectedProject('dungji')}
              className="group px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase flex items-center gap-2"
            >
              View Project
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </button>
          </div>
        </section>

        {/* Section 4: DOQ */}
        <section className="h-screen w-full relative flex flex-col justify-end p-12 pb-28 md:p-24 border-b border-white/5">
          <div className="max-w-2xl pointer-events-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">DOQ</h2>
            <p className="text-xl md:text-2xl opacity-60 mb-8 font-light">Frontend Development</p>
            <button
              onClick={() => setSelectedProject('doq')}
              className="group px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase flex items-center gap-2"
            >
              View Project
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </button>
          </div>
        </section>

        {/* Section 5: 덤앤덤 */}
        <section className="h-screen w-full relative flex flex-col justify-end p-12 pb-28 md:p-24 border-b border-white/5">
          <div className="max-w-2xl pointer-events-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">덤앤덤</h2>
            <p className="text-xl md:text-2xl opacity-60 mb-8 font-light">Product Management</p>
            <button
              onClick={() => setSelectedProject('dumandum')}
              className="group px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase flex items-center gap-2"
            >
              View Project
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </button>
          </div>
        </section>

        {/* Section 6: Dept. Website Renewal */}
        <section className="h-screen w-full relative flex flex-col justify-end p-12 pb-28 md:p-24 border-b border-white/5">
          <div className="max-w-2xl pointer-events-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">Dept. Website Renewal</h2>
            <p className="text-xl md:text-2xl opacity-60 mb-8 font-light">UX/UI Overhaul & Retention Strategy</p>
            <button
              onClick={() => setSelectedProject('deptwebsite')}
              className="group px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase flex items-center gap-2"
            >
              View Project
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </button>
          </div>
        </section>

        {/* Section 7: Monetai */}
        <section className="h-screen w-full relative flex flex-col justify-end p-12 pb-28 md:p-24 border-b border-white/5">
          <div className="max-w-2xl pointer-events-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">Monetai</h2>
            <p className="text-xl md:text-2xl opacity-60 mb-8 font-light">BD Campaign Planning & Execution</p>
            <button
              onClick={() => setSelectedProject('monetai')}
              className="group px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase flex items-center gap-2"
            >
              View Project
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </button>
          </div>
        </section>

        {/* Section 8: BarKit */}
        <section className="h-screen w-full relative flex flex-col justify-end p-12 pb-28 md:p-24">
          <div className="max-w-2xl pointer-events-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">BarKit</h2>
            <p className="text-xl md:text-2xl opacity-60 mb-8 font-light">Frontend Lead & Core Feature Development</p>
            <button
              onClick={() => setSelectedProject('barkit')}
              className="group px-8 py-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-widest uppercase flex items-center gap-2"
            >
              View Project
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
