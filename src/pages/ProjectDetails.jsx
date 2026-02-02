import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { MessageCircle, Palette, Database, Lock, Accessibility, Heart, Zap, ArrowLeft, Calendar, Code, Target, Lightbulb } from 'lucide-react';
import Contact from '../components/Contact';

const iconMap = {
    MessageCircle,
    Palette,
    Database,
    Lock,
    Accessibility,
    Heart,
    Zap
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = content.projects.find(p => p.id === id);

    if (!project) return <div className="h-screen flex items-center justify-center text-white">Project not found</div>;

    const IconComponent = iconMap[project.icon];

    return (
        <main className="bg-bg-color min-h-screen text-text-color">
            {/* Project Hero */}
            <section
                className="relative pt-48 pb-24 px-4 md:px-12 overflow-hidden"
                style={{ backgroundColor: `${project.color}10` }}
            >
                {/* Background Accent */}
                <div
                    className="absolute top-0 right-0 w-[600px] h-[600px] blur-[150px] opacity-20 -z-10"
                    style={{ backgroundColor: project.color }}
                />

                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-primary transition-all mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Works
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-end">
                        <div className="space-y-6">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-text-color/20 rounded-full"
                            >
                                {project.category}
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
                            >
                                {project.title}<span style={{ color: project.color }}>.</span>
                            </motion.h1>
                        </div>

                        <div className="flex justify-start md:justify-end">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="w-32 h-32 md:w-56 md:h-56 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden backdrop-blur-xl border border-white/10"
                                style={{
                                    backgroundColor: `${project.color}05`,
                                    borderColor: `${project.color}20`
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                                <div
                                    className="absolute -bottom-10 -right-10 w-32 h-32 blur-[50px] opacity-40"
                                    style={{ backgroundColor: project.color }}
                                />
                                {IconComponent && (
                                    <IconComponent
                                        size={80}
                                        strokeWidth={1}
                                        className="md:size-[120px] relative z-10 drop-shadow-lg"
                                        style={{ color: project.color }}
                                    />
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Specs */}
            <section className="py-20 px-4 md:px-12 border-b border-text-color/5">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 flex items-center gap-2">
                            <Calendar className="w-3 h-3" /> Year
                        </span>
                        <p className="text-xl font-medium">{project.year}</p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 flex items-center gap-2">
                            <Target className="w-3 h-3" /> Role
                        </span>
                        <p className="text-xl font-medium">Full Stack & Design</p>
                    </div>
                    <div className="col-span-2 space-y-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 flex items-center gap-2">
                            <Code className="w-3 h-3" /> Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-text-color/5 rounded-full text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Content */}
            <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-12 gap-20">
                    <div className="md:col-span-8 space-y-24">
                        {/* Challenge */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <span className="p-3 bg-red-500/10 rounded-2xl"><Target className="text-red-500 w-6 h-6" /></span>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-color">The Challenge</h2>
                            </div>
                            <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed italic border-l-4 border-red-500/30 pl-8">
                                "{project.challenge}"
                            </p>
                        </motion.div>

                        {/* Solution */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <span className="p-3 bg-green-500/10 rounded-2xl"><Lightbulb className="text-green-500 w-6 h-6" /></span>
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text-color">The Solution</h2>
                            </div>
                            <p className="text-xl md:text-2xl font-light opacity-80 leading-relaxed pl-4">
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>

                    {/* Sidebar / Extra Info */}
                    <div className="md:col-span-4 space-y-12">
                        <div className="p-8 bg-text-color/5 rounded-3xl border border-text-color/10 space-y-6">
                            <h4 className="text-lg font-bold">Key Project Milestones</h4>
                            <ul className="space-y-4 text-sm opacity-70">
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">01</span>
                                    Concept & Brutalist Strategy
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">02</span>
                                    AI-Assisted Prototyping
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">03</span>
                                    Full-Scale Development
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-primary font-bold">04</span>
                                    Polish & Optimization
                                </li>
                            </ul>
                        </div>

                        {project.link && project.link !== "#" && (
                            <div className="p-8 bg-primary/10 rounded-3xl border border-primary/20 space-y-6">
                                <h4 className="text-lg font-bold">Project Live</h4>
                                <p className="text-sm opacity-70">Experience the live version of this project in production.</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 w-full justify-center py-4 bg-primary text-black rounded-2xl font-bold hover:scale-[1.02] transition-transform"
                                >
                                    Visit Website ↗
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Next Project / CTA */}
            <section className="py-24 border-t border-text-color/5">
                <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
                    <p className="text-xs uppercase tracking-widest font-bold opacity-30 mb-8">Ready to see more?</p>
                    <Link
                        to="/"
                        className="text-4xl md:text-6xl font-black hover:text-primary transition-colors tracking-tighter"
                    >
                        Back to Showroom <span className="text-primary">→</span>
                    </Link>
                </div>
            </section>

            <Contact />
        </main >
    );
};

export default ProjectDetails;
