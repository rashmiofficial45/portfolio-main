"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000));

            toast.success('Message sent successfully!', {
                description: "I'll get back to you as soon as possible.",
            });

            reset();
        } catch (error) {
            toast.error('Failed to send message', {
                description: 'Please try again later or contact me directly.',
            });
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'john.doe@example.com',
            href: 'mailto:john.doe@example.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'San Francisco, CA',
            href: 'https://maps.google.com',
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com',
            color: 'hover:text-gray-900 dark:hover:text-white',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com',
            color: 'hover:text-blue-600',
        },
        {
            icon: Twitter,
            label: 'Twitter',
            href: 'https://twitter.com',
            color: 'hover:text-blue-400',
        },
    ];

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="Your name"
                                                {...register('name')}
                                                className={errors.name ? 'border-destructive' : ''}
                                            />
                                            {errors.name && (
                                                <p className="text-sm text-destructive">{errors.name.message}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your.email@example.com"
                                                {...register('email')}
                                                className={errors.email ? 'border-destructive' : ''}
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-destructive">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            placeholder="Project discussion"
                                            {...register('subject')}
                                            className={errors.subject ? 'border-destructive' : ''}
                                        />
                                        {errors.subject && (
                                            <p className="text-sm text-destructive">{errors.subject.message}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell me about your project..."
                                            rows={6}
                                            {...register('message')}
                                            className={errors.message ? 'border-destructive' : ''}
                                        />
                                        {errors.message && (
                                            <p className="text-sm text-destructive">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                I'm always interested in discussing new opportunities, creative projects,
                                or just having a friendly conversation about technology and development.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 8 }}
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <info.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{info.label}</p>
                                        <p className="text-muted-foreground">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="font-semibold mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-card rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Status */}
                        <motion.div
                            className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <div>
                                    <p className="font-medium text-green-700 dark:text-green-400">Available for Projects</p>
                                    <p className="text-sm text-muted-foreground">
                                        Currently accepting new projects for Q2 2024
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;