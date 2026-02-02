import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800); // 800ms buffer for exit animation
        }, 2000); // Show logo for 2 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="splash"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Custom bezier for smooth "curtain" feel
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] text-white"
                >
                    <div className="relative overflow-hidden">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "circOut" }}
                            className="text-8xl md:text-9xl font-black tracking-tighter"
                        >
                            MHF<span className="text-primary animate-pulse">.</span>
                        </motion.h1>
                    </div>

                    {/* Optional: Loading Progress Bar or similar minimal accent */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "200px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute bottom-20 h-1 bg-white/20 rounded-full overflow-hidden"
                    >
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
