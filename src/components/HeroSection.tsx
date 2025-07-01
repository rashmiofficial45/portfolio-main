"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
const HeroSection = () => {
    const scrollToAbout = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToProjects = () => {
        const aboutSection = document.querySelector('#projects');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleDownload = () => {
        const el = document.createElement("a")
        el.href = "/resume.pdf"
        el.download = "Rashmi_Resume.pdf"
        document.body.appendChild(el)
        el.click()
    }
    const email = 'rashmiofficial45@gmail.com'

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            delay: i * 2,
                        }}
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <span className="text-primary font-medium text-lg">Hello, I'm</span>
                            <h1 className="text-3xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                Rashmi Ranjan Parija
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                                Full Stack Developer
                            </h2>
                        </motion.div>

                        <motion.p
                            className="text-lg text-muted-foreground leading-relaxed max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            I craft exceptional digital experiences with modern technologies.
                            Passionate about creating scalable, user-friendly applications that
                            make a difference.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
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
                            className="flex space-x-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            {[
                                { Icon: Github, href: 'https://github.com/rashmiofficial45' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rashmi-ranjan-parija-19b5a5260/' },
                                { Icon: Mail, href: `https://mail.google.com/mail/u/0/?view=cm&tf=cm&to=${email}` },
                            ].map(({ Icon, href }, index) => (
                                <motion.a
                                    key={index}
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
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.div
                            className="relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                                <Image
                                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                                    alt="John Doe"
                                    width={320}
                                    height={320}
                                    className="object-cover w-full h-full"
                                    priority
                                />
                            </div>
                            {/* Floating elements around the image */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
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