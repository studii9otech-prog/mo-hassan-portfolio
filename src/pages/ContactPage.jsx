import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Mail, Linkedin, MapPin, Copy, Check, ArrowRight, Brain, Code, PenTool, Zap, Plus, Minus, MessageSquare, Rocket, Search, Target } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import RevealText from '../components/RevealText';
import Contact from '../components/Contact';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-text-color/10 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left group"
            >
                <span className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{question}</span>
                <span className="p-2 bg-text-color/5 rounded-full">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 0.7 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pt-4 pb-2 text-lg font-light leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ContactPage = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(content.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const expertise = [
        { icon: <PenTool />, title: "UI/UX Design", desc: "Crafting intuitive, minimalist, and high-impact digital experiences.", color: "#FF2D55" },
        { icon: <Code />, title: "Web Development", desc: "Building high-performance, responsive websites using modern stacks.", color: "#007AFF" },
        { icon: <Brain />, title: "AI Integration", desc: "Leveraging agentic AI and Vibe Coding to accelerate product delivery.", color: "#AF52DE" },
        { icon: <Zap />, title: "Branding", desc: "Developing unique visual identities that resonate with target audiences.", color: "#FF9500" }
    ];

    const process = [
        { step: "01", title: "Discovery", icon: <Search />, desc: "We deep dive into your goals, audience, and technical requirements." },
        { step: "02", title: "Strategy", icon: <Target />, desc: "Mapping out the user journey and technical architecture." },
        { step: "03", title: "Execution", icon: <PenTool />, desc: "Iterative design and development with a focus on quality." },
        { step: "04", title: "Delivery", icon: <Rocket />, desc: "Final polish, testing, and launching your digital product." }
    ];

    return (
        <main className="bg-bg-color min-h-screen pt-32 transition-colors duration-500">
            {/* Massive Hero Header */}
            <section className="px-4 md:px-12 mb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div className="flex items-center gap-4 px-5 py-2 bg-text-color/5 border border-text-color/10 rounded-xl backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]"></span>
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-text-color/60">Status</span>
                            </div>
                            <div className="w-px h-3 bg-text-color/10"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest">Available for new projects</span>
                        </div>
                    </div>

                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[4.5rem] md:text-[9.5rem] lg:text-[13rem] font-black tracking-tighter leading-[0.8] uppercase flex flex-col"
                    >
                        <span>Let's build</span>
                        <span className="text-transparent italic font-light outline-text" style={{ WebkitTextStroke: '1px var(--text-color)' }}>something</span>
                        <span className="flex items-center gap-4 md:gap-8">
                            Great <ArrowRight className="w-16 h-16 md:w-32 md:h-32 text-primary" strokeWidth={3} />
                        </span>
                    </motion.h1>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="px-4 md:px-12 py-32 bg-text-color/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                        <div className="space-y-4">
                            <span className="text-primary text-xs uppercase tracking-[0.5em] font-bold">Expertise</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">What I can help with</h2>
                        </div>
                        <p className="max-w-md text-lg opacity-60 font-light">Combining technical robustness with aesthetic excellence to build products that stand out.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {expertise.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover="hover"
                                className="p-10 bg-bg-color border border-text-color/10 rounded-[2.5rem] space-y-6 group cursor-default"
                            >
                                <motion.div
                                    variants={{
                                        hover: { borderColor: item.color, y: -8 }
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="h-full space-y-6"
                                >
                                    <motion.div
                                        variants={{
                                            hover: { backgroundColor: item.color, color: "#fff" }
                                        }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="w-14 h-14 bg-text-color/5 rounded-2xl flex items-center justify-center transition-colors duration-200"
                                        style={{ color: item.color }}
                                    >
                                        <div className="group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                    </motion.div>
                                    <h3 className="text-2xl font-bold transition-colors duration-200 group-hover:text-text-color">{item.title}</h3>
                                    <p className="opacity-60 text-sm leading-relaxed transition-opacity duration-200 group-hover:opacity-100">{item.desc}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Process Section */}
            <section className="px-4 md:px-12 py-40">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-24 text-center space-y-4">
                        <span className="text-primary text-xs uppercase tracking-[0.5em] font-bold">The Journey</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tight uppercase">How we work</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {process.map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="text-8xl font-black text-text-color/5 absolute -top-12 -left-4 group-hover:text-primary/10 transition-colors">{item.step}</div>
                                <div className="relative z-10 space-y-6 pt-8">
                                    <div className="flex items-center gap-4">
                                        <span className="p-3 bg-primary/10 rounded-xl text-primary">{item.icon}</span>
                                        <h3 className="text-2xl font-bold uppercase">{item.title}</h3>
                                    </div>
                                    <p className="opacity-60 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ & Final CTA */}
            <section className="px-4 md:px-12 py-40 border-t border-text-color/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24">
                    <div className="lg:col-span-7 space-y-16">
                        <div className="space-y-4">
                            <span className="text-primary text-xs uppercase tracking-[0.5em] font-bold">Q&A</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">Common Questions</h2>
                        </div>

                        <div className="space-y-2">
                            <FAQItem
                                question="What is your typical project timeline?"
                                answer="Most design and development projects take between 4 to 8 weeks, depending on complexity and requirements. I prioritize quality over speed while maintaining agile delivery."
                            />
                            <FAQItem
                                question="Do you work with startups?"
                                answer="Yes! I love working with startups. I help them move fast by building scalable MVPs and defining their initial digital brand identity."
                            />
                            <FAQItem
                                question="What technologies do you use?"
                                answer="I specialize in the MERN stack (MongoDB, Express, React, Node), Tailwind CSS, Framer Motion, and I'm highly proficient in AI-assisted development tools."
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="p-12 bg-primary rounded-[3rem] text-black space-y-8 relative overflow-hidden group">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />

                            <h3 className="text-4xl md:text-5xl font-black leading-tight uppercase relative z-10">Start a conversation</h3>
                            <p className="text-xl opacity-80 font-light relative z-10">Let's discuss how we can bring your vision to life through high-end design and code.</p>

                            <div className="pt-8 relative z-10">
                                <div
                                    onClick={copyToClipboard}
                                    className="bg-black text-white px-8 py-6 rounded-2xl flex items-center justify-between group/btn cursor-pointer shadow-xl hover:scale-[1.02] transition-transform"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email Me</span>
                                        <span className="text-lg font-bold">{content.contact.email}</span>
                                    </div>
                                    <div className="bg-white/10 p-3 rounded-xl transition-colors">
                                        {copied ? <Check size={20} /> : <Copy size={20} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimal Footer for Contact Page */}
            <Contact />
        </main>
    );
};

export default ContactPage;
