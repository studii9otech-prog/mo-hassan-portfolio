import React from 'react';
import { motion } from 'framer-motion';

// Abstract representations of different app interfaces
const WireframeVisuals = ({ type, color }) => {

    // 1. Chat Interface (Bubble Flow)
    if (type === 'chat-app') return (
        <div className="w-full h-full bg-[#1A1A1A] p-6 flex flex-col justify-between font-mono rounded-xl border border-white/5 shadow-2xl">
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-white/5 pb-4 opacity-50">
                <div className="w-10 h-10 rounded-full bg-white/10" />
                <div className="space-y-2">
                    <div className="w-24 h-3 bg-white/20 rounded-full" />
                    <div className="w-16 h-2 bg-white/10 rounded-full" />
                </div>
            </div>
            {/* Messages */}
            <div className="flex-1 py-6 space-y-6 overflow-hidden">
                <div className="flex flex-col gap-2 items-start">
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "60%", opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-10 bg-white/10 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl"
                    />
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "40%", opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="h-10 bg-white/10 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl"
                    />
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <motion.div
                        initial={{ width: 0, scale: 0.9, opacity: 0 }}
                        whileInView={{ width: "50%", scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        className="h-10 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl shadow-lg"
                        style={{ backgroundColor: color, opacity: 0.4 }}
                    />
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "70%", opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="h-10 bg-white/10 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl"
                    />
                    <motion.div
                        className="w-12 h-2 bg-white/10 rounded-full mt-1 animate-pulse"
                    />
                </div>
            </div>
            {/* Input */}
            <div className="h-12 bg-white/5 rounded-full flex items-center px-4 gap-4 border border-white/5">
                <div className="w-6 h-6 rounded-full bg-white/10" />
                <div className="flex-1 h-2 bg-white/10 rounded-full" />
            </div>
        </div>
    );

    // 2. Dashboard Interface (Grid & Sidebar)
    if (type === 'supply-system' || type === '21t-studio') return (
        <div className="w-full h-full bg-[#1A1A1A] flex font-mono rounded-xl border border-white/5 overflow-hidden shadow-2xl">
            {/* Sidebar */}
            <div className="w-20 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-white/2">
                <div className="w-8 h-8 rounded-lg bg-white/10" />
                <div className="w-full border-b border-white/5" />
                {[1, 2, 3, 4].map(i => <div key={i} className="w-6 h-6 rounded bg-white/5 hover:bg-white/10 transition-colors" />)}
            </div>
            {/* Content */}
            <div className="flex-1 p-6 space-y-6">
                <div className="flex justify-between items-center">
                    <div className="w-32 h-6 bg-white/10 rounded" />
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 h-32">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="bg-white/5 rounded-xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-20"><div className="w-12 h-12 rounded-full border border-white" /></div>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white/5 rounded-xl border border-white/5" />
                    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white/5 rounded-xl border border-white/5" />
                </div>
                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 h-40 flex items-end p-4 gap-2 relative overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-full opacity-10" style={{ background: `linear-gradient(to top, ${color}, transparent)` }} />
                    {[40, 70, 50, 90, 60, 80, 45, 85].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05, duration: 1, ease: "circOut" }}
                            className="flex-1 rounded-t-sm relative z-10"
                            style={{ backgroundColor: color, opacity: 0.6 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

    // 3. Mobile App (Gallery / Scroll)
    if (type === 'flowart' || type === 'nabra-app') return (
        <div className="w-full h-full flex justify-center items-center py-4">
            <div className="w-[280px] h-[95%] border-[8px] border-[#2A2A2A] rounded-[3rem] bg-[#101010] overflow-hidden flex flex-col relative shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#2A2A2A] rounded-b-xl z-10" />

                {/* Screen Content */}
                <div className="flex-1 p-4 pt-12 space-y-4 overflow-hidden">
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="w-full aspect-square rounded-2xl bg-white/5 relative overflow-hidden group border border-white/5"
                    >
                        <div className="absolute inset-0 bg-white/5 rotate-12 scale-150 opacity-20 transition-transform duration-700 group-hover:rotate-45" style={{ backgroundColor: color }} />
                        <div className="absolute bottom-4 left-4 w-20 h-2 bg-white/20 rounded-full" />
                    </motion.div>

                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                        {[1, 2, 3].map(i => (
                            <motion.div
                                key={i}
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="w-24 h-32 shrink-0 rounded-xl bg-white/5 border border-white/5"
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="h-16 border-t border-white/5 flex justify-around items-center px-4 bg-[#151515]">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                    <div className="w-12 h-12 rounded-full -mt-6 border-4 border-[#101010] flex items-center justify-center" style={{ backgroundColor: color }}>
                        <div className="w-4 h-4 bg-black/50 rounded-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>
            </div>
        </div>
    );

    // 4. Form / Security (Passth)
    return (
        <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center p-12 rounded-xl border border-white/5 font-mono shadow-2xl relative overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            <div className="w-full max-w-sm space-y-8 relative z-10">
                <div className="text-center space-y-4">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 rounded-full mx-auto border-4 border-dashed border-white/10 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="w-12 h-12 rounded-full opacity-50"
                            style={{ backgroundColor: color }}
                        />
                    </motion.div>
                    <div className="h-4 w-32 bg-white/10 rounded mx-auto" />
                </div>
                <div className="space-y-4 pt-4">
                    <div className="h-14 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-4 justify-between group hover:border-white/10 transition-colors">
                        <div className="flex gap-3">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="w-2 h-2 rounded-full bg-white/40"
                                />
                            ))}
                        </div>
                        <div className="w-4 h-4 rounded border-2 border-white/20" />
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="h-14 w-full rounded-xl flex items-center justify-center font-bold text-xs uppercase tracking-widest text-[#1A1A1A] shadow-lg cursor-pointer"
                        style={{ backgroundColor: color }}
                    >
                        Authenticate
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WireframeVisuals;
