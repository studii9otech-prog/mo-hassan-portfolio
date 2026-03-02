import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Mail, Linkedin, MapPin, Copy, Check } from 'lucide-react';
import MagneticButton from './MagneticButton';
import LiveTime from './LiveTime';
import RevealText from './RevealText';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(content.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="relative py-32 md:py-48 px-4 md:px-12 bg-black text-white overflow-hidden">
            {/* Dark Interactive Mesh Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-16 mb-24 gap-12">
                    <div className="flex flex-col gap-4">
                        <span className="text-primary text-xs uppercase tracking-[0.5em] font-bold">Contact</span>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[2.5rem] md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter leading-[0.85] uppercase"
                        >
                            Get in<br /> <span className="text-transparent italic font-light outline-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Touch.</span>
                        </motion.h2>
                    </div>

                    <LiveTime />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
                    {/* Left Side: Major CTA */}
                    <div className="space-y-12">
                        <RevealText
                            text="Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations."
                            className="text-xl md:text-3xl lg:text-4xl font-light leading-tight opacity-70"
                            stagger={0.02}
                        />

                        <div className="pt-8">
                            <MagneticButton>
                                <div
                                    onClick={copyToClipboard}
                                    className="group relative cursor-pointer inline-flex items-center gap-4 md:gap-6 bg-neutral-900 border border-white/5 p-6 md:p-12 rounded-3xl hover:bg-primary transition-all duration-500 overflow-hidden w-full md:w-auto"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-white/70 mb-2">My Email Address</span>
                                        <span className="text-lg md:text-3xl lg:text-4xl font-bold transition-transform group-hover:scale-105 duration-500 truncate">{content.contact.email}</span>
                                    </div>
                                    <div className="bg-white/10 p-3 md:p-4 rounded-2xl group-hover:bg-white/20 transition-colors shrink-0">
                                        <AnimatePresence mode="wait">
                                            {copied ? (
                                                <motion.div
                                                    key="check"
                                                    initial={{ scale: 0, rotate: -45 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    exit={{ scale: 0, rotate: 45 }}
                                                >
                                                    <Check className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="copy"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                >
                                                    <Copy className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Tooltip */}
                                    <AnimatePresence>
                                        {copied && (
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: 10, opacity: 0 }}
                                                className="absolute bottom-4 left-6 md:left-8 text-[10px] font-bold uppercase tracking-widest text-white/50"
                                            >
                                                Copied to clipboard
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </MagneticButton>
                        </div>
                    </div>

                    {/* Right Side: Socials & Details */}
                    <div className="flex flex-col gap-16 md:gap-12 lg:pl-24 h-full justify-between">
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
                                <div className="space-y-4">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold block">Social</span>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={content.contact.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-medium hover:text-[#0077b5] transition-colors flex items-center gap-2"
                                            aria-label="Visit LinkedIn Profile"
                                        >
                                            LinkedIn <span className="text-xs opacity-50">↗</span>
                                        </a>
                                        <a
                                            href={content.contact.behance}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-medium hover:text-[#1769ff] transition-colors flex items-center gap-2"
                                            aria-label="Visit Behance Profile"
                                        >
                                            Behance <span className="text-xs opacity-50">↗</span>
                                        </a>
                                        <a
                                            href="https://wa.me/201096550164"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-medium hover:text-[#25D366] transition-colors flex items-center gap-2"
                                            aria-label="Chat on WhatsApp"
                                        >
                                            WhatsApp <span className="text-xs opacity-50">↗</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold block">Location</span>
                                    <span className="text-xl font-medium block">{content.contact.location}</span>
                                    <span className="text-xs opacity-50 block uppercase tracking-widest">Available Remotely</span>

                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold block">Phone</span>
                                    <a
                                        href="https://wa.me/201096550164"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl font-medium block hover:text-[#25D366] transition-colors"
                                    >
                                        +20 109 655 0164
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-16 md:pt-48 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-t border-white/5">
                            <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">Built by</span>
                                <span className="text-2xl font-bold tracking-tighter">Mohamed Hassan Fawzi</span>
                            </div>
                            <p className="text-neutral-600 text-[10px] uppercase tracking-[0.2em] text-center md:text-right">
                                © 2026 / All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
