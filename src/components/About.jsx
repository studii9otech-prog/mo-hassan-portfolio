import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { content } from '../data/content';
import Marquee from './Marquee';
import RevealText from './RevealText';
import { Terminal, Zap, User, Sparkles } from 'lucide-react';

const About = () => {
    // Split skills for variety
    const topSkills = content.about.skills.slice(0, 5).join(" • ");
    const bottomSkills = content.about.skills.slice(5).join(" • ");

    const sectionRef = useRef(null);

    // Mouse position for interactive background
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothen mouse movement
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e) => {
        if (!sectionRef.current) return;
        const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        mouseX.set(x * 100);
        mouseY.set(y * 100);
    };

    // Parallax for portrait
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const portraitY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section
            id="about"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative bg-light dark:bg-dark text-text-color overflow-hidden transition-colors duration-700"
        >
            {/* Interactive Background Mesh */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-10">
                <motion.div
                    className="absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-primary/30 dark:bg-primary/20"
                    style={{
                        left: useTransform(springX, (v) => `${v}%`),
                        top: useTransform(springY, (v) => `${v}%`),
                        transform: "translate(-50%, -50%)"
                    }}
                />
            </div>

            {/* Editorial Header */}
            <div className="relative z-10 py-32 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-text-color/10 pb-16 mb-24 gap-8">
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.85]"
                        >
                            About<br /> <span className="opacity-30 italic font-light">Me.</span>
                        </motion.h2>
                    </div>

                    <div className="md:text-right max-w-sm">
                        <p className="text-xs uppercase tracking-[0.3em] font-bold mb-4 text-primary">My Mission</p>
                        <RevealText
                            text="Synthesizing design and intelligence to build the future of digital interaction."
                            className="text-xl md:text-2xl opacity-80 font-medium leading-tight"
                            stagger={0.03}
                        />
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start">
                    <div className="md:col-span-5 lg:col-span-4 sticky top-32">
                        {/* Interactive Personal Identity Card */}
                        <motion.div
                            style={{ y: portraitY }}
                            className="aspect-[3/4] bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden relative group shadow-2xl shadow-primary/10 flex flex-col p-8 md:p-10 justify-between"
                        >
                            {/* Animated Background Mesh */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(104,64,255,0.2),transparent_70%)]" />
                                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                            </div>

                            {/* Top Section: Icon & Category */}
                            <div className="relative z-10 flex justify-between items-start">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30"
                                >
                                    <Zap className="text-primary w-6 h-6 md:w-8 md:h-8 fill-primary/20" />
                                </motion.div>
                                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 text-white">Identity / 01</span>
                            </div>

                            {/* Middle Section: Monogram */}
                            <div className="relative z-10 py-6 md:py-8 flex-1 flex flex-col justify-center">
                                <h3 className="text-[min(6rem,15vw)] xl:text-[7.5rem] font-black tracking-tighter leading-none text-white opacity-90">
                                    MHF<span className="text-primary">.</span>
                                </h3>
                                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-primary mt-4">Mohamed Hassan Fawzi</p>
                            </div>

                            {/* Bottom Section: Skill Tags */}
                            <div className="relative z-10 border-t border-white/5 pt-6 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {["UI ARCHITECT", "VIBE CODER", "AI STRATEGIST"].map((tag, i) => (
                                        <span key={i} className="text-[8px] md:text-[9px] font-bold tracking-widest border border-white/20 px-3 py-1 rounded-full text-white/60">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Sparkles className="w-3 h-3 text-primary animate-pulse flex-shrink-0" />
                                    <span className="text-[8px] md:text-[10px] font-medium opacity-40 uppercase tracking-[0.15em] text-white">Evolution through Intelligence</span>
                                </div>
                            </div>

                            {/* Glowing Accent */}
                            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/40 transition-colors duration-700" />
                        </motion.div>
                    </div>

                    <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-20 md:pt-12">
                        {/* Big Statement */}
                        <div className="space-y-6">
                            <span className="text-xs uppercase tracking-widest text-primary/60 font-bold block">Objective</span>
                            <RevealText
                                text="I am a UI/UX Designer who brings visions to life through Vibe Coding & AI."
                                className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight"
                                stagger={0.02}
                                delay={0.2}
                            />
                        </div>

                        {/* Detailed Text */}
                        <div className="grid md:grid-cols-2 gap-12 text-lg md:text-xl opacity-70 leading-relaxed font-light">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                With over 2 years of experience, I bridge the gap between aesthetic excellence and functional robustness. I don't just write code; I orchestrate AI models (Claude, GPT-4, Gemini) to build complex full-stack solutions with speed and precision.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                My background in UI/UX Design ensures that every pixel serves a purpose. From managing large-scale supply systems to crafting pixel-perfect mobile apps for accessibility, my work is defined by empathy and efficiency.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Kinetic Skills Marquee */}
            <div className="py-32 space-y-12 bg-text-color text-bg-color mt-32 relative z-10">
                <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                <Marquee baseVelocity={-2}>
                    <span className="text-5xl md:text-9xl font-extrabold mx-12 uppercase tracking-tighter">{topSkills} • </span>
                </Marquee>
                <Marquee baseVelocity={2}>
                    <span className="text-5xl md:text-9xl font-light italic mx-12 tracking-tight opacity-50">{bottomSkills} • </span>
                </Marquee>
            </div>

        </section>
    );
};

export default About;
