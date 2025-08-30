"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
    const values = [
        {
            icon: Code,
            title: 'Clean Code',
            description: 'I believe in writing maintainable, scalable, and well-documented code.',
        },
        {
            icon: Palette,
            title: 'Design First',
            description: 'Great user experience starts with thoughtful design and attention to detail.',
        },
        {
            icon: Rocket,
            title: 'Performance',
            description: 'Optimizing for speed and efficiency in every project I build.',
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'Working closely with teams to deliver exceptional results.',
        },
    ];

    const experience = [
        {
            year: '2023',
            title: 'Associate Software Engineer',
            company: 'Accenture',
            description:
                'Contributed to enterprise-grade applications using React and Node.js. Collaborated closely with cross-functional teams, implemented API integrations, improved app performance, and followed Agile practices to iterate quickly and reliably.',
        },
    ];

    return (
        <section id="about" className="py-20 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Passionate developer with 5+ years of experience creating digital solutions
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Story */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">My Story</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                My journey into web development began during my computer science studies,
                                where I discovered my passion for creating digital experiences that solve
                                real-world problems.
                            </p>
                            <p>
                                Collaborating closely with cross-functional teams, I’ve honed my skills in everything from UI architecture to backend integrations and deployment pipelines. I care deeply about code quality, performance optimization (e.g. SSR, indexing, caching), and secure authentication flows.
                            </p>
                            <p>
                                Outside coding, you can find me exploring new design trends,
                                contributing to open-source projects, or sharing knowledge with the developer community.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'AWS'].map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-sm">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Experience</h3>
                        <div className="space-y-6">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="relative pl-8 border-l-2 border-primary/20"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-primary">{item.year}</span>
                                        </div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground">{item.company}</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Values Grid */}
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold text-center mb-12">What Drives Me</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full text-center group hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6">
                                        <motion.div
                                            className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <value.icon className="w-6 h-6 text-primary" />
                                        </motion.div>
                                        <h4 className="font-semibold mb-2">{value.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;