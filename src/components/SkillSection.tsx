"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
                { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
                { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
                { name: 'Vue.js', level: 80, color: 'bg-green-500' },
            ],
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 88, color: 'bg-green-600' },
                { name: 'Python', level: 85, color: 'bg-yellow-500' },
                { name: 'PostgreSQL', level: 82, color: 'bg-blue-700' },
                { name: 'MongoDB', level: 78, color: 'bg-green-700' },
            ],
        },
        {
            title: 'Tools & Technologies',
            skills: [
                { name: 'AWS', level: 85, color: 'bg-orange-500' },
                { name: 'Docker', level: 80, color: 'bg-blue-400' },
                { name: 'Git', level: 95, color: 'bg-red-500' },
                { name: 'Figma', level: 88, color: 'bg-purple-500' },
            ],
        },
    ];

    const technologies = [
        'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js',
        'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes',
        'Tailwind CSS', 'SASS', 'GraphQL', 'REST APIs', 'Git', 'Figma',
        'Jest', 'Cypress', 'Webpack', 'Vite', 'Redux', 'Zustand'
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
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern web applications
                    </p>
                </motion.div>

                {/* Skill Categories */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            className="space-y-2"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2">
                                                <motion.div
                                                    className={`h-2 rounded-full ${skill.color}`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Technology Cloud */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
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

                {/* Additional Stats */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {[
                        { number: '50+', label: 'Projects Completed' },
                        { number: '5+', label: 'Years Experience' },
                        { number: '20+', label: 'Technologies Mastered' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {stat.number}
                            </motion.div>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;