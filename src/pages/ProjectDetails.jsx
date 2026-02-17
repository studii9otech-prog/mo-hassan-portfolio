import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { MessageCircle, Palette, Database, Lock, Accessibility, Heart, Zap, ArrowLeft, Calendar, Code, Target, Lightbulb, Search, Workflow, Layout, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Contact from '../components/Contact';
import WireframeVisuals from '../components/WireframeVisuals';

const iconMap = {
    MessageCircle,
    Palette,
    Database,
    Lock,
    Accessibility,
    Heart,
    Zap
};

// --- SCROLLYTELLING COMPONENT ---
const ScrollyStep = ({ id, onActive, children, className = "" }) => {
    return (
        <motion.div
            className={`min-h-screen flex items-center justify-center p-6 md:p-12 relative z-10 ${className}`}
            onViewportEnter={() => onActive(id)}
            viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px" }}
        >
            {children}
        </motion.div>
    );
};

// --- VISUAL STAGE COMPONENT ---
const VisualStage = ({ activeStep, project, IconComponent }) => {
    return (
        <div className="fixed inset-0 w-full h-full bg-[#050505] -z-20 overflow-hidden transition-colors duration-1000">
            <AnimatePresence mode="wait">

                {/* 1. HERO VISUAL - GLOW & TITLE */}
                {activeStep === 'hero' && (
                    <motion.div
                        key="hero-vis"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div
                            className="absolute w-[60vw] h-[60vw] blur-[150px] opacity-20 rounded-full animate-pulse-slow"
                            style={{ backgroundColor: project.color }}
                        />
                    </motion.div>
                )}

                {/* 2. PROBLEM VISUAL - RED/DARK TINT */}
                {activeStep === 'problem' && (
                    <motion.div
                        key="problem-vis"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="border-[20px] border-white/5 rounded-full w-[80vh] h-[80vh] flex items-center justify-center"
                        >
                            <div className="border-[20px] border-white/5 rounded-full w-[50vh] h-[50vh]" />
                        </motion.div>
                    </motion.div>
                )}

                {/* 3. RESEARCH VISUAL - CONNECTING DOTS */}
                {activeStep === 'research' && (
                    <motion.div
                        key="research-vis"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#080808]"
                    >
                        {/* Dynamic Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: `radial-gradient(${project.color} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
                        />
                    </motion.div>
                )}

                {/* 4. WIREFRAME VISUAL - BLUEPRINT MODE */}
                {activeStep === 'wireframes' && (
                    <motion.div
                        key="wireframes-vis"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }} // Zoom out on exit
                        className="absolute inset-0 flex items-center justify-center p-8 md:p-24 bg-[#0a0a0a]"
                    >
                        <div className="w-full h-full max-w-5xl border border-white/10 rounded-3xl relative p-4 shadow-2xl overflow-hidden bg-black">
                            <div className="absolute inset-0 opacity-10"
                                style={{ backgroundImage: `linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
                            />
                            <WireframeVisuals type={project.id} color={project.color} />
                        </div>
                    </motion.div>
                )}

                {/* 5. FINAL UI - FULL COLOR REVEAL */}
                {activeStep === 'final' && (
                    <motion.div
                        key="final-vis"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Abstract Gradient BG */}
                        <div
                            className="absolute inset-0 opacity-40 transition-all duration-1000"
                            style={{ background: `radial-gradient(circle at center, ${project.color}, black)` }}
                        />
                        <div className="absolute inset-0 backdrop-blur-3xl" />
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
};


const ProjectDetails = () => {
    const { id } = useParams();
    const project = content.projects.find(p => p.id === id);
    const [activeStep, setActiveStep] = useState('hero');

    const IconComponent = iconMap[project.icon];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return <div>Not Found</div>;

    const textCardClass = "bg-[#050505]/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-2xl w-full border-t border-t-white/20";
    const labelClass = "text-xs font-bold uppercase tracking-widest opacity-60 mb-6 flex items-center gap-2";

    const currentIndex = content.projects.findIndex(p => p.id === id);
    const nextIndex = (currentIndex + 1) % content.projects.length;
    const nextProject = content.projects[nextIndex];

    return (
        <main className="min-h-screen text-white relative">

            {/* --- THE STAGE (Background) --- */}
            <VisualStage activeStep={activeStep} project={project} IconComponent={IconComponent} />

            {/* --- THE SCRIPT (Foreground Content) --- */}

            {/* 1. HERO */}
            <ScrollyStep id="hero" onActive={setActiveStep} className="items-end md:items-center pb-20">
                <div className="text-center space-y-6 max-w-4xl">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono uppercase text-white/70">{project.category}</span>
                    </motion.div>
                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="text-6xl md:text-9xl font-black tracking-tighter leading-none"
                    >
                        {project.title}
                        <span style={{ color: project.color }}>.</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl font-light opacity-60 max-w-2xl mx-auto">{project.description}</p>


                </div>
            </ScrollyStep>

            {/* 2. PROBLEM */}
            <ScrollyStep id="problem" onActive={setActiveStep}>
                <div className={textCardClass}>
                    <span className={labelClass} style={{ color: project.color }}><Target className="w-4 h-4" /> The Challenge</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">The Obstacle.</h2>
                    <p className="text-xl font-light leading-relaxed opacity-80 mb-8">
                        {project.problem}
                    </p>
                    <div className="pl-6 border-l-2 border-white/10">
                        <p className="text-lg italic opacity-60">
                            "{project.challenge || "We needed to rethink the entire experience from the ground up."}"
                        </p>
                    </div>
                </div>
            </ScrollyStep>

            {/* 3. RESEARCH & FLOW */}
            <ScrollyStep id="research" onActive={setActiveStep}>
                <div className="grid gap-6 w-full max-w-4xl">
                    <div className={`${textCardClass} md:ml-auto`}>
                        <span className={labelClass} style={{ color: project.color }}><Search className="w-4 h-4" /> Research</span>
                        <p className="text-2xl font-light leading-relaxed">
                            "{project.research}"
                        </p>
                    </div>

                    <div className={`${textCardClass} md:mr-auto delay-100`}>
                        <span className={labelClass} style={{ color: project.color }}><Workflow className="w-4 h-4" /> The Flow</span>
                        <div className="space-y-4">
                            {project.userFlow && project.userFlow.split('->').map((step, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold border border-white/10 group-hover:scale-110 transition-transform" style={{ borderColor: project.color }}>
                                        {i + 1}
                                    </div>
                                    <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">{step.trim()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollyStep>

            {/* 4. WIREFRAME (Context only, visual is full screen) */}
            <ScrollyStep id="wireframes" onActive={setActiveStep} className="pointer-events-none">
                {/* Content is minimal here to let the VisualStage shine */}
                <div className="bg-black/80 backdrop-blur-xl p-8 rounded-full border border-white/10 flex items-center gap-6 pointer-events-auto shadow-2xl">
                    <Layout className="w-8 h-8" style={{ color: project.color }} />
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest opacity-50">Construction Mode</h3>
                        <p className="font-mono text-lg">{project.wireframes}</p>
                    </div>
                </div>
            </ScrollyStep>

            {/* 5. FINAL UI */}
            <ScrollyStep id="final" onActive={setActiveStep}>
                <div className="text-center space-y-12 max-w-4xl">
                    <div className="inline-block p-12 rounded-[3rem] bg-black/40 backdrop-blur-2xl border border-white/10 md:p-20">
                        <span className="inline-block py-2 px-6 rounded-full border border-white/20 bg-white/5 text-sm font-bold uppercase tracking-widest mb-8">
                            The Outcome
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 shadow-black drop-shadow-2xl">
                            Why it <span style={{ color: project.color }}>Works.</span>
                        </h2>
                        <p className="text-xl md:text-3xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
                            "{project.why}"
                        </p>
                    </div>

                    {project.link && project.link !== "#" && (
                        <div className="pt-12">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                            >
                                Visit Live Project <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    )}
                </div>
            </ScrollyStep>

            <section className="relative z-10 bg-bg-color">
                <div className="border-t border-white/10">
                    <Link to={`/project/${nextProject.id}`} className="block py-24 text-center group">
                        <span className="text-2xl font-bold uppercase tracking-widest text-[#00C853] block mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Up Next</span>
                        <h3 className="text-3xl md:text-5xl font-black tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                            {nextProject.title} <ArrowRight className="inline-block ml-4 mb-2" />
                        </h3>
                    </Link>
                </div>
                <Contact />
            </section>

        </main>
    );
};

export default ProjectDetails;
