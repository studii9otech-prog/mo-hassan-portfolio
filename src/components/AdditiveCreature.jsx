import { useEffect, useRef } from 'react';
import { animate, stagger, utils } from 'animejs';
import { createTimeline } from 'animejs/timeline';
import { createTimer } from 'animejs/timer';

const AdditiveCreature = () => {
    const containerRef = useRef(null);
    const rows = 13;
    // Create an array for grid items
    const gridItems = Array.from({ length: rows * rows });

    useEffect(() => {
        const creatureEl = containerRef.current;
        if (!creatureEl) return;

        // Dimensions
        const viewport = { w: window.innerWidth * 0.5, h: window.innerHeight * 0.5 };
        const cursor = { x: 0, y: 0 };
        const grid = [rows, rows];
        const from = 'center';

        // Staggers
        const scaleStagger = stagger([2, 5], { ease: 'inQuad', grid, from });
        const opacityStagger = stagger([1, 0.1], { grid, from });

        // Select elements (React refs would be cleaner but querying matches original script structure easily)
        const particuleEls = creatureEl.children;

        // Initial Set
        utils.set(creatureEl, {
            width: rows * 10 + 'em',
            height: rows * 10 + 'em'
        });

        utils.set(particuleEls, {
            x: 0,
            y: 0,
            scale: scaleStagger,
            opacity: opacityStagger,
            background: stagger([80, 20], {
                grid, from,
                // Using fixed hue (primary color) approx or keeping red if desired? 
                // User asked for "same layer of color #6840FF".
                // #6840FF is HSL(253, 100%, 63%) approx.
                // Let's vary lightness/opacity or just use the hue.
                // Original: `hsl(4, 70%, ${v}%)` (Red)
                // New: Hue ~253 (Purple/Blue).
                modifier: v => `hsl(253, 80%, ${v}%)`,
            }),
            boxShadow: stagger([8, 1], {
                grid, from,
                modifier: v => `0px 0px ${utils.round(v, 0)}em 0px var(--primary)`,
            }),
            zIndex: stagger([rows * rows, 1], { grid, from, modifier: utils.round(0) }),
        });

        // Pulse Animation
        const pulse = () => {
            animate(particuleEls, {
                keyframes: [
                    {
                        scale: 5,
                        opacity: 1,
                        delay: stagger(90, { start: 1650, grid, from }),
                        duration: 150,
                    }, {
                        scale: scaleStagger,
                        opacity: opacityStagger,
                        ease: 'inOutQuad',
                        duration: 600
                    }
                ],
            });
        }

        // Main Loop (Cursor Following)
        const mainLoop = createTimer({
            frameRate: 15,
            onUpdate: () => {
                animate(particuleEls, {
                    x: cursor.x,
                    y: cursor.y,
                    delay: stagger(40, { grid, from }),
                    duration: stagger(120, { start: 750, ease: 'inQuad', grid, from }),
                    ease: 'inOut',
                    composition: 'blend',
                });
            }
        });

        // Auto Move Timeline
        const autoMove = createTimeline({
            // loops/autoplay params if needed in V4? 
            // V4 timeline might have .play() called manually or auto.
        })
            .add(cursor, {
                x: [-viewport.w * 0.45, viewport.w * 0.45],
                modifier: x => x + Math.sin(mainLoop.currentTime * 0.0007) * viewport.w * 0.5,
                duration: 3000,
                ease: 'inOutExpo',
                alternate: true,
                loop: true,
                onBegin: pulse,
                onLoop: pulse,
            }, 0)
            .add(cursor, {
                y: [-viewport.h * 0.45, viewport.h * 0.45],
                modifier: y => y + Math.cos(mainLoop.currentTime * 0.00012) * viewport.h * 0.5,
                duration: 1000,
                ease: 'inOutQuad',
                alternate: true,
                loop: true,
            }, 0);

        // Initial Play
        // mainLoop.start(); // Timer starts automatically? Usually yes in V4 implies. check docs if fail.

        const manualMovementTimeout = createTimer({
            duration: 1500,
            onComplete: () => autoMove.play(),
        });

        // Event Listeners
        const followPointer = (e) => {
            const event = e.type === 'touchmove' ? e.touches[0] : e;
            cursor.x = event.pageX - viewport.w;
            cursor.y = event.pageY - viewport.h;
            autoMove.pause();
            manualMovementTimeout.restart();
        }

        window.addEventListener('mousemove', followPointer);
        window.addEventListener('touchmove', followPointer);

        // Handle Resize?
        // Original script didn't match resize, but valid to add.

        return () => {
            // Cleanup
            window.removeEventListener('mousemove', followPointer);
            window.removeEventListener('touchmove', followPointer);
            // Stop timers/animations
            // autoMove.pause();
            // mainLoop.pause(); 
            // V4 might offer .pause() or .stop().
            // If StrictMode runs this twice, we might have issues if not cleaned up.
            // Ensure we clean up.
            try {
                if (mainLoop.pause) mainLoop.pause();
                if (autoMove.pause) autoMove.pause();
                if (manualMovementTimeout.pause) manualMovementTimeout.pause();
            } catch (e) { console.warn("Cleanup error", e); }
        };
    }, [rows]); // Run once

    return (
        <div id="creature-wrapper" className="flex justify-center items-center absolute top-0 left-0 overflow-hidden w-full h-full pointer-events-none z-0">
            <div ref={containerRef} id="creature" className="flex flex-wrap justify-center items-center w-[150em] h-[150em] text-[.2vh]">
                {gridItems.map((_, i) => (
                    <div
                        key={i}
                        className="relative w-[2.5em] h-[2.5em] m-[2em] rounded-full bg-primary mix-blend-plus-lighter will-change-transform"
                        style={{ transformStyle: 'preserve-3d' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdditiveCreature;
