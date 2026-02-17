import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Cpu, Code, Layout } from 'lucide-react';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import Contact from '../components/Contact';

const Experience = () => {
    const aiExpertise = [
        { title: "Vibe Coding", desc: "Using AI to translate design logic into functional reality, ensuring the final product matches the creative vision." },
        { title: "Rapid Prototyping", desc: "Accelerating the design-to-build process using tools like Bolt & Windsurf to validate ideas instantly." },
        { title: "AI-Assisted Design", desc: "Directing LLMs (Claude, GPT-4) to write code that adheres strictly to UX principles and visual aesthetics." },
        { title: "Functional UX", desc: "Connecting interfaces to real data (Supabase) to deliver living products, not just static screens." }
    ];

    const professionalExperience = [
        {
            role: "UI/UX Designer",
            company: "Freelance / Startup Projects",
            period: "2022 – Present",
            description: "Spearheaded design for 30+ diverse projects. Pioneered accessibility designs like 'Nabra' (Sign-to-Text)."
        },
        {
            role: "Lead Mobile Maintenance Specialist",
            company: "Smartphone Academy",
            period: "2021 – 2022",
            description: "Managed maintenance operations and integrated new technical training protocols."
        },
        {
            role: "Branch Manager",
            company: "Smartphone Academy",
            period: "2020 – 2021",
            description: "Directed daily operations and exceeded operational targets for technical training."
        }
    ];

    const education = [
        {
            degree: "Bachelor of Management Information Systems",
            school: "Higher Institute of Technology – Minya",
            period: "Expected 2027"
        }
    ];

    return (
        <main className="bg-light dark:bg-dark text-text-color transition-colors duration-500 min-h-screen">
            {/* Cinematic Hero Section */}
            <section className="pt-48 pb-24 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-text-color/10 pb-20">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-primary text-xs uppercase tracking-[0.6em] font-bold mb-8 block"
                        >
                            Professional Chronology
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.8] uppercase mb-8 text-neutral-900 dark:text-neutral-100"
                        >
                            The <br /> <span className="text-black dark:text-black font-black">Journey.</span>
                        </motion.h1>
                        <RevealText
                            text="A record of designing interfaces and building the future using AI-assisted intelligence."
                            className="text-2xl md:text-3xl font-light opacity-70 max-w-2xl"
                            stagger={0.02}
                        />
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative cursor-pointer group"
                    >
                        {/* Resume Miniature Template */}
                        <div className="w-56 h-80 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden relative p-6 flex flex-col gap-4 transition-colors duration-500">
                            {/* Header Skeleton */}
                            <div className="flex gap-3 items-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10" />
                                <div className="flex flex-col gap-2 flex-1">
                                    <div className="h-3 w-20 bg-primary/20 rounded-full" />
                                    <div className="h-2 w-12 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
                                </div>
                            </div>
                            {/* Body Skeleton */}
                            <div className="flex flex-col gap-3 mt-4">
                                <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded-full" />
                                <div className="h-2 w-5/6 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
                                <div className="h-2 w-4/6 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
                            </div>
                            <div className="flex flex-col gap-3 mt-6">
                                <div className="h-3 w-16 bg-primary/10 rounded-full" />
                                <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-900 rounded-full" />
                                <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-900 rounded-full" />
                                <div className="h-2 w-3/4 bg-neutral-100 dark:bg-neutral-900 rounded-full" />
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-[2px]">
                                <a
                                    href="/cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                    title="View CV"
                                >
                                    <Layout className="w-5 h-5" />
                                </a>
                                <a
                                    href="/cv.pdf"
                                    download="Mohamed_Hassan_CV.pdf"
                                    className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                                    title="Download CV"
                                >
                                    <Download className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Tag */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                <span className="text-[10px] uppercase tracking-widest font-bold opacity-30 group-hover:opacity-100 transition-opacity">CV Options</span>
                            </div>
                        </div>

                        {/* Decorative Background Card (Stacked look) */}
                        <div className="absolute -inset-2 bg-primary/5 rounded-2xl -z-10 rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                        <div className="absolute -inset-2 bg-neutral-500/5 rounded-2xl -z-20 -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
                    </motion.div>
                </div>
            </section>

            {/* AI Technical Expertise Grid */}
            <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {aiExpertise.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 border border-text-color/5 bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl group hover:border-primary/30 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                {idx === 0 ? <Code className="text-primary" /> : idx === 1 ? <Cpu className="text-primary" /> : idx === 2 ? <Layout className="text-primary" /> : <Briefcase className="text-primary" />}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-sm opacity-60 leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* The Vibe Coding Workflow */}
            <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto border-t border-text-color/5">
                <div className="mb-20">
                    <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-4 block">The Workflow</span>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">From Idea to <span className="text-primary italic font-light">Digital Reality.</span></h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            step: "01",
                            title: "Discovery & Analysis",
                            desc: "Deep diving into the project needs, understanding the business logic, and identifying core problems through interviews and research.",
                            icon: "🔍",
                            color: "hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:border-neutral-800 dark:hover:border-neutral-100"
                        },
                        {
                            step: "02",
                            title: "UX Strategy",
                            desc: "Crafting the user journey, wireframing solutions, and prototyping the experience to ensure maximum usability.",
                            icon: "🧠",
                            color: "hover:bg-[#10b981] hover:border-[#10b981]"
                        },
                        {
                            step: "03",
                            title: "UI Design",
                            desc: "Bringing the vision to life in Figma/Adobe XD with premium aesthetics, focusing on typography, colors, and motion.",
                            icon: "🎨",
                            color: "hover:bg-[#f43f5e] hover:border-[#f43f5e]"
                        },
                        {
                            step: "04",
                            title: "AI-Assisted Build",
                            desc: "Leveraging 'Vibe Coding' workflows with tools like Antigravity, Trae IDE, and advanced LLMs for rapid, high-fidelity development.",
                            icon: "⚡",
                            color: "hover:bg-[#6840FF] hover:border-[#6840FF]"
                        },
                        {
                            step: "05",
                            title: "Backend Integration",
                            desc: "Powering the experience with Supabase for secure authentication, real-time databases, and scalable serverless architecture.",
                            icon: "🔋",
                            color: "hover:bg-[#0ea5e9] hover:border-[#0ea5e9]"
                        },
                        {
                            step: "06",
                            title: "Launch & Success",
                            desc: "Deploying a complete, polished product ready to solve problems and deliver success to individuals or businesses.",
                            icon: "🚀",
                            color: "hover:bg-[#f59e0b] hover:border-[#f59e0b]"
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -5 }}
                            className={`relative p-6 md:p-10 border border-text-color/5 bg-neutral-50 dark:bg-neutral-900/40 rounded-[2.5rem] group ${item.color} transition-all duration-200 ease-out overflow-hidden`}
                        >
                            <span className="absolute top-8 right-10 text-6xl font-black opacity-[0.03] group-hover:opacity-10 group-hover:text-white dark:group-hover:text-black transition-opacity">{item.step}</span>
                            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300">{item.icon}</div>
                            <h4 className="text-2xl font-bold mb-4 group-hover:text-white dark:group-hover:text-black transition-colors">{item.title}</h4>
                            <p className="text-sm opacity-60 leading-relaxed font-light group-hover:text-white/90 dark:group-hover:text-black/80 group-hover:opacity-100 transition-all">{item.desc}</p>

                            <div className="mt-8 h-[1px] w-12 bg-primary group-hover:bg-white/40 dark:group-hover:bg-black/20 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto border-t border-text-color/5">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-4 lg:col-span-3">
                        <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary md:sticky top-32 block">Experience History</span>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 space-y-24">
                        {professionalExperience.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative flex flex-col md:flex-row gap-8 items-start group"
                            >
                                <div className="text-sm font-bold opacity-30 tracking-widest uppercase md:w-32 pt-2">{job.period}</div>
                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                                        <h3 className="text-3xl md:text-5xl font-bold group-hover:text-primary transition-colors duration-500">{job.role}</h3>
                                        <div className="h-[2px] w-0 group-hover:w-16 bg-primary transition-all duration-700 hidden md:block" />
                                    </div>
                                    <p className="text-base md:text-xl font-medium opacity-80 uppercase tracking-widest text-primary/80">{job.company}</p>
                                    <p className="text-lg opacity-60 max-w-2xl font-light leading-relaxed">{job.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education & Credentials */}
            <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto border-t border-text-color/5">
                <div className="grid md:grid-cols-2 gap-24">
                    {/* Education */}
                    <div className="space-y-12">
                        <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary block">Education</span>
                        {education.map((edu, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <div className="p-4 bg-primary/5 rounded-2xl"><GraduationCap className="text-primary" /></div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                                    <p className="text-primary/60 font-medium mb-4">{edu.school}</p>
                                    <span className="text-xs font-bold opacity-30 tracking-[0.3em] uppercase">{edu.period}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certs Detail */}
                    <div className="space-y-12">
                        <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary block">Key Credentials</span>
                        <div className="grid gap-6">
                            {["ITI UI/UX Design (2022)", "Google UX Design Professional (2023)", "Advanced Management Cert (2022)"].map((cert, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-6 border border-text-color/5 bg-neutral-50 dark:bg-neutral-900/20 rounded-2xl group hover:border-primary/20 transition-all">
                                    <Award className="w-5 h-5 opacity-30 group-hover:text-primary group-hover:opacity-100 transition-all" />
                                    <span className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Soft Skills & Languages */}
            <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto border-t border-text-color/5 mb-32">
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 space-y-12">
                        <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary block">Core Soft Skills</span>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { name: "Leadership", color: "hover:bg-[#6840FF] hover:border-[#6840FF]" },
                                { name: "Effective Communication", color: "hover:bg-[#00D1FF] hover:border-[#00D1FF]" },
                                { name: "Problem Solving", color: "hover:bg-[#10b981] hover:border-[#10b981]" },
                                { name: "Analytical Thinking", color: "hover:bg-[#f43f5e] hover:border-[#f43f5e]" },
                                { name: "Time Management", color: "hover:bg-[#f59e0b] hover:border-[#f59e0b]" },
                                { name: "Adaptability", color: "hover:bg-[#0ea5e9] hover:border-[#0ea5e9]" }
                            ].map((skill, idx) => (
                                <motion.span
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className={`px-6 py-3 rounded-full border border-text-color/10 ${skill.color} hover:text-white dark:hover:text-black transition-all duration-200 cursor-default text-sm font-medium`}
                                >
                                    {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-4 space-y-12">
                        <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary block">Languages</span>
                        <div className="space-y-6">
                            {[
                                { lang: "Arabic", level: "Native", val: 100 },
                                { lang: "English", level: "Elementary (In Progress)", val: 35 },
                            ].map((l, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-xl font-bold">{l.lang}</span>
                                        <span className="text-xs opacity-50 uppercase tracking-widest">{l.level}</span>
                                    </div>
                                    <div className="h-1 w-full bg-text-color/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${l.val}%` }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </main>
    );
};

export default Experience;
