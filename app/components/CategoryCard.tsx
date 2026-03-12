"use client";

import { motion } from "framer-motion";

const fadeSlideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.6,
            ease: "easeOut" as const,
        },
    }),
};

interface CategoryCardProps {
    category: string;
    description: string;
    projectCount: number;
    index: number;
    onClick: () => void;
}

export default function CategoryCard({ category, description, projectCount, index, onClick }: CategoryCardProps) {
    return (
        <motion.button
            onClick={onClick}
            className="group relative text-left p-12 md:p-16 border border-white/10 hover:border-white/40 bg-black/40 backdrop-blur-sm transition-colors duration-500 hover:bg-white/5 overflow-hidden"
            custom={index}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 group-hover:translate-x-2 transition-transform duration-500 capitalize">
                {category}
            </h3>

            <p className="text-sm md:text-base text-white/40 font-light mb-8 group-hover:text-white/60 transition-colors duration-500">
                {description}
            </p>

            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-white/30 group-hover:text-white transition-all duration-500">
                {projectCount} Projects
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                </span>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700"></div>
        </motion.button>
    );
}
