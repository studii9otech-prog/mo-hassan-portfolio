import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import classNames from 'classnames';

const Cursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useSpring(0, { stiffness: 250, damping: 20 });
    const cursorY = useSpring(0, { stiffness: 250, damping: 20 });

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className={classNames(
                "fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference custom-cursor",
                { "scale-[4]": isHovering }
            )}
            style={{
                x: cursorX,
                y: cursorY,
            }}
            transition={{ scale: { duration: 0.2 } }}
        />
    );
};

export default Cursor;
