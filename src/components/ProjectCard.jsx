import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Palette, Database, Lock, Accessibility, Heart, Zap, Navigation } from 'lucide-react';

const iconMap = {
    MessageCircle,
    Palette,
    Database,
    Lock,
    Accessibility,
    Heart,
    Zap,
    Navigation
};

const ProjectCard = ({ project, index, progress, range, targetScale }) => {
    const container = useRef(null);
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const IconComponent = iconMap[project.icon];

    const imageScale = useTransform(smoothScroll, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-[80vh] md:h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
            <motion.div
                style={{ scale, backgroundColor: project.color, top: `calc(10vh + ${index * 30}px)` }}
                onClick={() => navigate(`/project/${project.id}`)}
                className="relative flex flex-col w-full md:w-[1000px] h-full md:h-[500px] max-h-[70vh] md:max-h-none rounded-[24px] p-6 md:p-12 transform-gpu shadow-2xl origin-top overflow-hidden cursor-pointer group/card"
            >
                <div className="flex flex-col md:flex-row h-full gap-6 md:gap-12">

                    {/* Content Side */}
                    <div className="w-full md:w-[40%] flex flex-col justify-between text-white order-2 md:order-1">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold mb-4">{project.title}</h2>
                            <span className="inline-block px-3 py-1 mb-4 md:mb-6 text-[10px] font-bold uppercase tracking-widest border border-white/30 rounded-full">
                                {project.category}
                            </span>
                            <p className="text-sm md:text-base font-light opacity-90 leading-relaxed line-clamp-3 md:line-clamp-none">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 cursor-pointer group mt-6 md:mt-0 w-fit">
                            <span className="text-base md:text-lg font-medium border-b border-white/0 group-hover:border-white/100 transition-all">View Project</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>

                    {/* Visual Side (Mockup/Preview) */}
                    <div className="relative w-full md:w-[60%] h-48 md:h-full rounded-2xl overflow-hidden bg-white/5 order-1 md:order-2 flex items-center justify-center">
                        <motion.div
                            className="w-full h-full flex items-center justify-center"
                            style={{ scale: imageScale }}
                        >
                            {IconComponent ? (
                                <IconComponent
                                    strokeWidth={1}
                                    className="text-white/40 w-24 h-24 md:w-48 md:h-48"
                                />
                            ) : (
                                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                    <span className="text-4xl md:text-6xl opacity-20 uppercase font-black tracking-widest">Preview</span>
                                </div>
                            )}
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
