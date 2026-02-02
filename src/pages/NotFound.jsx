import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, WifiOff } from 'lucide-react';

const GlitchText = ({ text }) => {
    return (
        <div className="relative inline-block text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter mix-blend-difference text-white">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -ml-1 text-red-500 opacity-70 animate-pulse">{text}</span>
            <span className="absolute top-0 left-0 ml-1 text-blue-500 opacity-70 animate-pulse delay-75">{text}</span>
        </div>
    );
};

const NotFound = () => {
    const [scramble, setScramble] = useState("Signal Lost");
    const final = "Signal Lost";
    const chars = "!@#$%^&*()_+-=[]{}|;':,./<>?";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setScramble(prev =>
                final
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return final[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= final.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen w-full bg-[#050505] text-[#F5F5DC] flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Glitch Fragments */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                {/* Random noise or lines could go here, keeping it clean for now */}
                <div className="absolute top-[20%] left-[10%] w-64 h-1 bg-white/20" />
                <div className="absolute bottom-[30%] right-[10%] w-96 h-1 bg-white/20" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 flex flex-col items-center text-center space-y-8"
            >
                <motion.div
                    animate={{
                        translateY: [0, -5, 0, 5, 0],
                        translateX: [0, 2, -2, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.2,
                        repeatType: "mirror",
                        ease: "linear"
                    }}
                >
                    <GlitchText text="404" />
                </motion.div>

                <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3">
                        <WifiOff className="w-6 h-6 animate-pulse text-red-500" />
                        <span className="font-mono text-sm md:text-base tracking-[0.5em] uppercase opacity-70">
                            {scramble}
                        </span>
                    </div>

                    <p className="max-w-md text-white/50 font-light leading-relaxed">
                        The reality you are looking for has been disconnected from the documented matrix.
                    </p>
                </div>

                <Link
                    to="/"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden hover:bg-white/10 transition-colors mt-8"
                >
                    <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Zap className="w-4 h-4 text-primary relative z-10" />
                    <span className="text-sm font-bold uppercase tracking-widest relative z-10">Re-establish Connection</span>
                </Link>
            </motion.div>

            {/* Code Decor */}
            <div className="absolute bottom-12 left-12 font-mono text-xs opacity-20 hidden md:block">
                <p>ERR_CONNECTION_TIMED_OUT</p>
                <p>AT: 0x00000000</p>
            </div>

        </div>
    );
};

export default NotFound;
