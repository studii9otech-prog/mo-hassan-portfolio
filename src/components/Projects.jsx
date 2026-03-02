import React, { useRef } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import { content } from '../data/content';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="work" ref={container} className="relative bg-light dark:bg-dark py-[10vh]">

            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 md:px-12 mb-24">
                <h2 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-tighter mb-6">Selected Works<span className="text-primary">.</span></h2>
                <p className="text-xl max-w-xl font-light opacity-70">
                    A curation of my latest digital products, focusing on AI-driven development and premium user experiences.
                </p>
            </div>

            <div className="flex flex-col items-center">
                {content.projects.map((project, index) => {
                    const targetScale = 1 - ((content.projects.length - index) * 0.05);
                    return (
                        <ProjectCard
                            key={index}
                            index={index}
                            project={project}
                            progress={smoothProgress}
                            range={[index * 0.15, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
