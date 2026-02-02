import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Download, Brain, Code2, Users, Wrench, GraduationCap, Award, Calendar, ExternalLink, Sparkles, Zap } from 'lucide-react';
import RevealText from '../components/RevealText';
import Contact from '../components/Contact';

const AboutPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Parallax effects
    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Card Parallax
    const cardY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    const experiences = [
        {
            role: "UI/UX Designer",
            company: "Freelance / Startup Projects",
            period: "2022 – Present",
            description: [
                "Spearheaded the design and development of over 30 diverse UI/UX projects, including social platforms, management systems, and smart applications.",
                "Pioneered the design of the 'Nabra' sign language-to-text application, significantly enhancing accessibility.",
                "Engineered a user-friendly social media platform for seniors.",
                "Mastered Figma and Adobe XD to produce high-quality, interactive designs and prototypes."
            ]
        },
        {
            role: "Lead Mobile Maintenance Specialist",
            company: "Smartphone Academy – Minya",
            period: "05/2021 – 12/2022",
            description: [
                "Operated as the sole specialist, managing all mobile maintenance responsibilities.",
                "Developed and executed advanced training plans, integrating the latest maintenance technologies."
            ]
        },
        {
            role: "Branch Manager",
            company: "Smartphone Academy – Minya",
            period: "09/2020 – 05/2021",
            description: [
                "Directed branch operations, supervising daily tasks and team assignments.",
                "Guided a small team to exceed training and operational targets.",
                "Optimized training program efficiency to align with market demands."
            ]
        },
        {
            role: "Mobile Maintenance Instructor",
            company: "Smartphone Academy – Minya",
            period: "01/2020 – 09/2020",
            description: [
                "Instructed 3 weekly groups (10 students/group) in mobile maintenance.",
                "Facilitated the graduation of over 24 groups, contributing to improved student placement rates."
            ]
        }
    ];

    const education = [
        {
            degree: "Bachelor of Management Information Systems (MIS)",
            school: "Higher Institute of Technology and Information – Minya (EST)",
            year: "Expected Graduation: 2027"
        }
    ];

    const certifications = [
        "UI/UX Design Course – Information Technology Institute (ITI) (2022)",
        "Google UX Design Course – Coursera (2023, Online)",
        "Experience Certificate in Training and Branch Management – Smartphone Academy (2020 – 2022)"
    ];

    const skills = {
        "AI Development": ["Vibe Coding", "Claude Opus/Sonnet", "ChatGPT", "Google Gemini 3 Pro", "Bolt/Trea/Windsurf"],
        "Backend & DB": ["Supabase (Auth, DB, Real-Time)"],
        "UI/UX Design": ["Figma", "Adobe XD", "Sketch", "Prototyping", "Wireframing"],
        "Technical": ["HTML", "CSS", "JavaScript/React", "Git"],
        "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Adaptability"]
    };

    return (
        <div ref={containerRef} className="bg-light dark:bg-dark text-text-color min-h-screen transition-colors duration-700">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[80vh] flex flex-col justify-center px-6 md:px-20 overflow-hidden pt-20">
                <motion.div style={{ y: yHero, opacity: opacityHero }} className="z-10">
                    <p className="text-primary font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base">The Digital Dossier</p>
                    <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter text-dark dark:text-light mb-8">
                        MOHAMED<br />
                        HASSAN.
                    </h1>
                    <div className="max-w-2xl">
                        <RevealText
                            text="AI-Assisted Developer & UI/UX Designer crafting the future of digital products."
                            className="text-xl md:text-3xl font-light opacity-80 leading-relaxed"
                            delay={0.2}
                        />
                    </div>
                </motion.div>

                {/* Background Grid */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </section>

            <div className="max-w-7xl mx-auto px-6 md:px-20 pb-32">

                {/* --- BIO & PHILOSOPHY --- */}
                <section className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-40">
                    <div className="lg:col-span-4 space-y-8 relative lg:sticky lg:top-32 self-start max-w-md mx-auto lg:mx-0 w-full">
                        {/* Identity Card Replacement */}
                        <motion.div
                            style={{ y: cardY }}
                            className="aspect-[3/4] bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden relative group shadow-2xl shadow-primary/10 flex flex-col p-10 justify-between"
                        >
                            {/* Animated Background Mesh Inside Card */}
                            <div className="absolute inset-0 opacity-30 pointer-events-none">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(104,64,255,0.4),transparent_70%)]" />
                                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px]" />
                            </div>

                            {/* Top Section: Icon & Category */}
                            <div className="relative z-10 flex justify-between items-start">
                                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                    <Zap className="text-primary w-6 h-6 fill-primary/20" />
                                </div>
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 text-white">Identity / 01</span>
                            </div>

                            {/* Middle Section: Monogram */}
                            <div className="relative z-10 py-8">
                                <div className="overflow-hidden">
                                    <h3 className="text-[5rem] font-black tracking-tighter leading-none text-white opacity-90">
                                        MH<span className="text-primary">.</span>
                                    </h3>
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mt-2">Mohamed Hassan</p>
                            </div>

                            {/* Bottom Section: Skill Tags */}
                            <div className="relative z-10 border-t border-white/10 pt-6 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {["UI ARCHITECT", "VIBE CODER"].map((tag, i) => (
                                        <span key={i} className="text-[8px] font-bold tracking-widest border border-white/20 px-2 py-1 rounded-full text-white/70">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                                    <span className="text-[9px] font-medium opacity-50 uppercase tracking-[0.2em] text-white">System Validated</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="p-6 bg-neutral-100 dark:bg-neutral-900 rounded-2xl space-y-4">
                            <h3 className="font-bold uppercase tracking-widest text-sm opacity-50">Contact</h3>
                            <div className="space-y-2 text-sm font-medium">
                                <p>Minya, Egypt</p>
                                <p>mohamedta21ak@gmail.com</p>
                                <p>+20 109 655 0164</p>
                                <a href="https://www.linkedin.com/in/mo-hassan21ta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                                    LinkedIn <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-24">

                        {/* Summary */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                                <Users className="text-primary" /> Professional Summary
                            </h2>
                            <p className="text-xl opacity-70 leading-relaxed font-light">
                                A versatile developer and designer specializing in <span className="text-primary font-medium">AI-Assisted Development (Vibe Coding)</span> and <span className="text-primary font-medium">UI/UX Design</span>, backed by 2+ years of experience.
                                Proficient in building full-stack solutions using AI-driven workflows, with a solid understanding of programming fundamentals and backend development using Supabase.
                                Proven track record in leading projects, optimizing operational efficiency, and developing teams.
                            </p>
                        </div>

                        {/* AI / Vibe Coding Section */}
                        <div className="p-8 md:p-12 bg-neutral-100 dark:bg-neutral-900 rounded-3xl space-y-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <h2 className="text-3xl font-bold flex items-center gap-3 relative z-10">
                                <Brain className="text-primary" /> The "Vibe Coding" Philosophy
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                <div>
                                    <h4 className="font-bold mb-3 opacity-90">AI-Driven Workflows</h4>
                                    <p className="opacity-60 text-sm leading-relaxed">
                                        I don't just use AI as a tool; I treat it as a collaborator. By leveraging
                                        Claude Opus, Sonnet, and Gemini Pro, I accelerate the development lifecycle
                                        while maintaining rigorous code quality standards.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-3 opacity-90">Toolchain Mastery</h4>
                                    <p className="opacity-60 text-sm leading-relaxed">
                                        Utilizing next-gen editors like Cursor, Windsurf, and internal tools (Antigravity),
                                        I bridge the gap between design intent and implementation reality faster than traditional methods allow.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Experience Timeline */}
                        <div className="space-y-12">
                            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                                <Calendar className="text-primary" /> Experience
                            </h2>
                            <div className="border-l-2 border-primary/20 pl-8 space-y-16 relative">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative"
                                    >
                                        <span className="absolute -left-[41px] top-2 min-w-4 min-h-4 rounded-full bg-primary border-4 border-light dark:border-dark" />

                                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                            <h3 className="text-2xl font-bold">{exp.role}</h3>
                                            <span className="font-mono text-sm opacity-50 bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded">{exp.period}</span>
                                        </div>
                                        <p className="text-primary font-medium mb-4">{exp.company}</p>
                                        <ul className="space-y-2 opacity-70 list-disc pl-4 marker:text-primary">
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                                <Wrench className="text-primary" /> Technical Arsenal
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {Object.entries(skills).map(([category, items], idx) => (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-2xl border border-transparent hover:border-primary/20 transition-colors"
                                    >
                                        <h3 className="font-bold mb-4 text-primary opacity-80">{category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map(skill => (
                                                <span key={skill} className="text-xs font-bold uppercase tracking-wider bg-white dark:bg-black/40 px-3 py-1.5 rounded-md opacity-70">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-text-color/10">
                            <div>
                                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                                    <GraduationCap className="text-primary" /> Education
                                </h2>
                                {education.map((edu, i) => (
                                    <div key={i} className="mb-6">
                                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                                        <p className="opacity-70">{edu.school}</p>
                                        <p className="text-sm opacity-50 mt-1">{edu.year}</p>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                                    <Award className="text-primary" /> Certifications
                                </h2>
                                <ul className="space-y-4">
                                    {certifications.map((cert, i) => (
                                        <li key={i} className="flex gap-3 text-sm opacity-80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <Contact />
        </div>
    );
};

export default AboutPage;
