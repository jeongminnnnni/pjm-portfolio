'use client';

import React from 'react';
import type { ProjectDetail } from '../lib/projects';

interface ProjectModalProps {
    project: ProjectDetail | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl bg-black border border-white p-8 md:p-12 shadow-2xl mx-4 max-h-[90vh] overflow-y-auto custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white hover:text-gray-400 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-8 border-b border-white pb-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                        {project.title}
                    </h2>
                    <p className="text-xl text-gray-400 font-light">{project.subtitle}</p>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-white pl-3">Overview</h3>
                    <p className="text-gray-300 whitespace-pre-line leading-relaxed">{project.description}</p>
                </div>

                {/* Key Contribution */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-white pl-3">Key Contribution</h3>
                    <p className="text-lg font-medium text-white">{project.contribution}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-white pl-3">Key Features</h3>
                    <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                <span className="text-white mt-1.5 w-1 h-1 bg-white rounded-full"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 border-l-2 border-white pl-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 border border-white/30 text-xs text-white uppercase tracking-wider"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* More Detail Button */}
                <div className="pt-4 border-t border-white/10">
                    <a
                        href={project.detailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-medium text-xs tracking-widest uppercase border border-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        More Detail
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
