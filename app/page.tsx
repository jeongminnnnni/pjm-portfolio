"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import ParticleMorph from "./components/ParticleMorph";
import ProjectModal from "./components/ProjectModal";
import CategoryCard from "./components/CategoryCard";
import ProjectCard from "./components/ProjectCard";
import SocialDock from "./components/SocialDock";

type Category = "business" | "product";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
}

const categories: Record<Category, ProjectItem[]> = {
  business: [
    { id: "nextcareer", title: "Next Career", subtitle: "AI Tech Pipeline Design" },
    { id: "dumandum", title: "덤앤덤", subtitle: "Product Management" },
    { id: "monetai", title: "Monetai", subtitle: "BD Campaign Planning & Execution" },
  ],
  product: [
    { id: "dungji", title: "둥지동지", subtitle: "Service Stabilization" },
    { id: "doq", title: "DOQ", subtitle: "Frontend Development" },
    { id: "deptwebsite", title: "Dept. Website Renewal", subtitle: "UX/UI Overhaul & Retention Strategy" },
    { id: "barkit", title: "BarKit", subtitle: "Frontend Lead & Core Feature Development" },
  ],
};

const categoryDescriptions: Record<Category, string> = {
  business: "기획 · BD · 마케팅 프로젝트",
  product: "개발 · 디자인 · 엔지니어링 프로젝트",
};

// Map category to particle shape index: 0=Galaxy(hero), 1=Dollar(biz), 2=Document(product)
const shapeIndexMap: Record<Category, number> = {
  business: 1,
  product: 2,
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  const targetShapeIndex = selectedCategory ? shapeIndexMap[selectedCategory] : 0;

  return (
    <main className="relative w-full min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">

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
            enableRotate={isDesktop}
          />
          <ParticleMorph targetShapeIndex={targetShapeIndex} />
        </Canvas>
      </div>

      <ProjectModal
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <SocialDock />

      {/* Content Layer */}
      <div className="relative z-10">

        {/* Hero */}
        <section className="h-screen w-full relative flex flex-col justify-end p-12 md:p-24 border-b border-white/5">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 leading-[0.9]">
              Product<br />Engineer
            </h1>
            <p className="text-sm md:text-base opacity-70 font-mono mt-10">
              Bridging Art, Technology, and Business
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="min-h-screen w-full px-8 md:px-24 py-20 md:py-32">

          {/* Section Header */}
          <div className="max-w-5xl mx-auto mb-16">
            <motion.h2
              className="text-4xl md:text-6xl font-bold tracking-tight mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Projects
            </motion.h2>
          </div>

          {/* Category Cards or Project Cards */}
          <div className="max-w-5xl mx-auto">
            {selectedCategory === null ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {(["business", "product"] as Category[]).map((cat, index) => (
                  <CategoryCard
                    key={cat}
                    category={cat}
                    description={categoryDescriptions[cat]}
                    projectCount={categories[cat].length}
                    index={index}
                    onClick={() => setSelectedCategory(cat)}
                  />
                ))}
              </div>
            ) : (
              <div>
                {/* Back Button */}
                <motion.button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-300 mb-10 group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                  <span className="tracking-widest uppercase text-xs">Back</span>
                </motion.button>

                {/* Category Title */}
                <motion.h3
                  className="text-2xl md:text-3xl font-bold tracking-tight mb-8 capitalize"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {selectedCategory}
                </motion.h3>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categories[selectedCategory].map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      subtitle={project.subtitle}
                      index={index}
                      onClick={() => setSelectedProject(project.id)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}
