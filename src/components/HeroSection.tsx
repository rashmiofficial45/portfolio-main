"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
        const projectsSection = document.querySelector('#projects');
        projectsSection?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleDownload = () => {
        const el = document.createElement('a');
        el.href = '/resume.pdf';
        el.download = 'Rashmi_Resume.pdf';
        document.body.appendChild(el);
        el.click();
    };
    const email = 'rashmiofficial45@gmail.com';

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center px-4"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full"
                        animate={{ x: [0, 100, 0], y: [0, -100, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i * 2 }}
                        style={{ left: `${20 + i * 20}%`, top: `${20 + i * 15}%` }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-2xl space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-primary font-medium text-lg">
                        Hello, I&apos;m
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Rashmi Ranjan Parija
                    </h1>
                    <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mt-2">
                        Full Stack Developer
                    </h2>
                </motion.div>

                <motion.p
                    className="text-lg text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Crafting performant, scalable web applications for over 2 years. I
                    specialize in building modern user interfaces and backend systems
                    using React.js, Node.js, Express, and MongoDB. With a knack for
                    optimizing performance and containerizing deployments with Docker, I
                    ensure every project delivers clean code, fast features, and
                    delightful experiences.
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Button size="lg" onClick={handleDownload} className="group">
                        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Download CV
                    </Button>
                    <Button variant="outline" size="lg" onClick={scrollToProjects}>
                        View My Work
                    </Button>
                </motion.div>

                <motion.div
                    className="flex justify-center space-x-6 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {[
                        { Icon: Github, href: 'https://github.com/rashmiofficial45' },
                        { Icon: Linkedin, href: 'https://www.linkedin.com/in/rashmi-ranjan-parija-19b5a5260/' },
                        { Icon: Mail, href: `mailto:${email}` },
                    ].map(({ Icon, href }, idx) => (
                        <motion.a
                            key={idx}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon className="w-5 h-5" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="flex justify-center items-center pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <motion.button
                        onClick={scrollToAbout}
                        className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-foreground transition-colors"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-sm">Scroll down</span>
                        <ArrowDown className="w-4 h-4" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
