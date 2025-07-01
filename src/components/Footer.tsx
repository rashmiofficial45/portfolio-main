"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            John Doe
                        </h3>
                        <p className="text-muted-foreground max-w-md">
                            Full Stack Developer passionate about creating exceptional digital experiences
                            with modern technologies and thoughtful design.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {[
                                { name: 'About', href: '#about' },
                                { name: 'Skills', href: '#skills' },
                                { name: 'Projects', href: '#projects' },
                                { name: 'Contact', href: '#contact' },
                            ].map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        const element = document.querySelector(link.href);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-semibold">Get in Touch</h4>
                        <div className="space-y-2 text-muted-foreground">
                            <p>john.doe@example.com</p>
                            <p>+1 (555) 123-4567</p>
                            <p>San Francisco, CA</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center space-x-1 text-muted-foreground text-sm mb-4 md:mb-0">
                        <span>© 2024 John Doe. Made with</span>
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>and lots of coffee</span>
                    </div>

                    <Button
                        onClick={scrollToTop}
                        variant="outline"
                        size="sm"
                        className="group"
                    >
                        <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Back to Top
                    </Button>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;