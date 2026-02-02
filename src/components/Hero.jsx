import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { content } from '../data/content';
import { ArrowUpRight, MessageCircle, Palette, Database, Lock, Accessibility, Zap, Heart } from 'lucide-react';
import RevealText from './RevealText';

const iconMap = {
    MessageCircle,
    Palette,
    Database,
    Lock,
    Accessibility,
    Zap,
    Heart
};

const Hero = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // On mobile, set first project as active initially if none selected
    useEffect(() => {
        if (isMobile && !activeProject && content.projects.length > 0) {
            // Optional: Auto-select first item? 
            // Better: Let the scroll trigger handle it via InView
        }
    }, [isMobile]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center transition-colors duration-700 bg-light dark:bg-dark text-text-color">

            {/* 1. DYNAMIC BACKGROUND FLOOD */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        key={activeProject.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 z-0"
                        style={{ backgroundColor: activeProject.color }}
                    />
                )}
            </AnimatePresence>

            {/* Grain Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />


            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center h-full py-32 md:py-0">

                {/* LEFT: TITLE & INTRO */}
                <div className="flex flex-col items-start gap-8 md:gap-12 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="uppercase tracking-[0.3em] text-xs font-medium text-dimmed mb-4 block">Mohamed Hassan</span>
                        <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.9] tracking-tighter mb-6">
                            Building <br />
                            <span className="text-dimmed opacity-40">Digital Value.</span>
                        </h1>
                        <p className="max-w-md text-lg text-text-color/70 leading-relaxed">
                            Designing interfaces that don't just function—they feel.
                            Where engineering meets emotion to create digital value.
                        </p>
                    </motion.div>
                </div>

                {/* RIGHT: INTERACTIVE PROJECT LIST */}
                <div className="flex flex-col items-start w-full pb-32 md:pb-0">
                    {content.projects.slice(0, 5).map((project, index) => (
                        <ProjectListItem
                            key={project.id}
                            project={project}
                            index={index}
                            setActiveProject={setActiveProject}
                            activeProject={activeProject}
                            isMobile={isMobile}
                        />
                    ))}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-8 pt-8 border-t border-dimmed/10 w-full flex justify-between items-center text-xs uppercase tracking-widest text-dimmed"
                    >
                        <span>Selected Works 2023-2024</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                </div>

            </div>

            {/* FLOATING PREVIEW ELEMENT (Visual Anchor) */}
            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotate: -10 }}
                        transition={{ duration: 0.4 }}
                        className="fixed bottom-12 right-6 md:bottom-24 md:left-24 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen opacity-100"
                    >
                        {/* Large Icon Representation */}
                        {React.createElement(iconMap[activeProject.icon] || Zap, {
                            size: isMobile ? 200 : 400,
                            color: activeProject.color,
                            strokeWidth: 0.5,
                            className: "opacity-20 lg:opacity-10 dark:opacity-20 blur-sm lg:blur-0"
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProjectListItem = ({ project, index, setActiveProject, activeProject, isMobile }) => {
    const ref = React.useRef(null);
    // Use InView to detect when item is in center of viewport on mobile
    const isInView = useInView(ref, {
        margin: "-30% 0px -30% 0px", // Widen the trigger zone (middle 40% of screen) to prevent skipping
        amount: 0.5 // Trigger when 50% of the active zone is occupied
    });

    useEffect(() => {
        if (isMobile && isInView) {
            setActiveProject(project);
        }
    }, [isMobile, isInView, project, setActiveProject]);

    const isActive = activeProject?.id === project.id;
    const isDimmed = activeProject && !isActive;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            onMouseEnter={() => !isMobile && setActiveProject(project)}
            onMouseLeave={() => !isMobile && setActiveProject(null)}
            className="w-full relative group cursor-pointer py-12 md:py-6 border-b border-dimmed/10 min-h-[15vh] md:min-h-0 flex flex-col justify-center"
        >
            <div className={`flex items-center justify-between transition-all duration-300 ${isDimmed ? 'opacity-30 blur-[1px]' : 'opacity-100'}`}>
                <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-dimmed">0{index + 1}</span>
                    <h3 className={`text-3xl md:text-5xl font-medium tracking-tight transition-colors duration-300 ${isActive ? 'translate-x-4' : ''}`}
                        style={{ color: isActive ? project.color : 'inherit' }}
                    >
                        {project.category}
                    </h3>
                </div>

                <motion.div
                    animate={{ rotate: isActive ? 45 : 0, scale: isActive ? 1.2 : 1 }}
                    className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}
                >
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" style={{ color: project.color }} />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
