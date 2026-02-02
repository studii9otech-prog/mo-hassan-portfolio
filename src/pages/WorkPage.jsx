import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import Contact from '../components/Contact';

const WorkPage = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Web Application', 'iOS + Web App', 'Enterprise System', 'Security Tool', 'Accessibility Mobile App', 'Creative Agency / Startup'];
    // Simplify categories for the UI
    const uiCategories = ['All', 'Web', 'Mobile', 'Design', 'Enterprise'];

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return content.projects;
        return content.projects.filter(p => {
            if (filter === 'Web') return p.category.includes('Web') || p.category.includes('System');
            if (filter === 'Mobile') return p.category.includes('Mobile') || p.category.includes('iOS');
            if (filter === 'Design') return p.category.includes('Creative') || p.category.includes('Startup');
            if (filter === 'Enterprise') return p.category.includes('Enterprise') || p.category.includes('Security');
            return true;
        });
    }, [filter]);

    return (
        <main className="bg-bg-color min-h-screen pt-32 overflow-hidden">
            {/* Massive Header */}
            <section className="px-4 md:px-12 mb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-text-color/10 pb-16">
                        <div className="space-y-6">
                            <span className="text-primary text-xs uppercase tracking-[0.5em] font-bold">Showroom</span>
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[5rem] md:text-[10rem] lg:text-[14rem] font-black tracking-tighter leading-[0.8] uppercase"
                            >
                                Selected<br />
                                <span className="text-transparent italic font-light outline-text" style={{ WebkitTextStroke: '1px var(--text-color)' }}>Works.</span>
                            </motion.h1>
                        </div>

                        <div className="flex flex-col gap-4 items-start md:items-end">
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Total Case Studies</span>
                            <span className="text-6xl md:text-8xl font-black text-primary leading-none">0{content.projects.length}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="px-4 md:px-12 mb-20 sticky top-24 z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 no-scrollbar items-center">
                        {uiCategories.map((cat) => {
                            const isActive = filter === cat;
                            const count = cat === 'All'
                                ? content.projects.length
                                : content.projects.filter(p => {
                                    if (cat === 'Web') return p.category.includes('Web') || p.category.includes('System');
                                    if (cat === 'Mobile') return p.category.includes('Mobile') || p.category.includes('iOS');
                                    if (cat === 'Design') return p.category.includes('Creative') || p.category.includes('Startup');
                                    if (cat === 'Enterprise') return p.category.includes('Enterprise') || p.category.includes('Security');
                                    return false;
                                }).length;

                            return (
                                <motion.button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.96 }}
                                    className={`relative px-8 py-4 rounded-2xl border transition-colors duration-500 whitespace-nowrap font-bold text-sm uppercase tracking-widest flex items-center gap-3 overflow-hidden group ${isActive
                                        ? 'text-bg-color border-transparent'
                                        : 'text-text-color/40 border-text-color/10 hover:border-text-color/30 hover:text-text-color'
                                        }`}
                                >
                                    <span className="relative z-10">{cat}</span>
                                    <span className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full transition-colors ${isActive ? 'bg-bg-color/20 text-bg-color' : 'bg-text-color/5 text-text-color/20 group-hover:text-text-color/40'
                                        }`}>
                                        {count}
                                    </span>

                                    {isActive && (
                                        <motion.div
                                            layoutId="activeFilterPill"
                                            className="absolute inset-0 bg-text-color z-0"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Alternating Project Grid */}
            <section className="px-4 md:px-12 mb-40">
                <div className="max-w-7xl mx-auto space-y-24 md:space-y-40">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => {
                            const IconComponent = LucideIcons[project.icon] || LucideIcons.Zap;
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
                                >
                                    {/* Visual Representation */}
                                    <div className="w-full md:w-3/5 group cursor-pointer relative overflow-hidden rounded-[3rem] border border-text-color/10 bg-text-color/5 aspect-[16/10] md:aspect-square lg:aspect-[16/10] flex items-center justify-center">
                                        <Link to={`/project/${project.id}`} className="absolute inset-0 z-10" />

                                        {/* Dynamic Gradient Background */}
                                        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000" style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent)` }} />

                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="relative z-0 p-12 md:p-24"
                                            style={{ color: project.color }}
                                        >
                                            <IconComponent size={180} strokeWidth={1} />
                                        </motion.div>

                                        {/* Overlay Info */}
                                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                            <div className="space-y-2">
                                                <span className="px-4 py-2 bg-bg-color/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-text-color/5">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <div className="p-4 bg-text-color text-bg-color rounded-2xl group-hover:scale-110 transition-transform">
                                                <LucideIcons.ArrowUpRight size={24} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="w-full md:w-2/5 space-y-8">
                                        <div className="space-y-4">
                                            <span className="text-primary font-black text-6xl opacity-10 leading-none">0{index + 1}</span>
                                            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight">{project.title}</h2>
                                        </div>

                                        <p className="text-xl opacity-60 font-light leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {project.technologies.slice(0, 3).map(tech => (
                                                <span key={tech} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-text-color/5 rounded-lg border border-text-color/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-8">
                                            <Link
                                                to={`/project/${project.id}`}
                                                className="inline-flex items-center gap-4 group"
                                            >
                                                <span className="text-xl font-bold border-b-2 border-primary pb-1 group-hover:pr-4 transition-all">Case Study</span>
                                                <LucideIcons.ArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </section>

            <Contact />
        </main>
    );
};

export default WorkPage;
