"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {

    const technologies = [
        'JavaScript', 'TypeScript', 'React', 'Next.js', 'AWS', 'Node.js',
        'Shadcn', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes',
        'Tailwind CSS', 'SASS', 'GraphQL', 'REST APIs', 'Git', 'Redis',
        'Redux', 'Zustand', 'Recoil'
    ];

    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
                </motion.div>

                {/* Technology Cloud */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.02 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -2 }}
                            >
                                <Badge
                                    variant="secondary"
                                    className="text-sm py-2 px-4 cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    {tech}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default SkillsSection;