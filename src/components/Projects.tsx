"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'LMS WITH ADMIN DASHBOARD',
            description: 'CMS-driven LMS using Next.js, Sanity, and Clerk — enabling content creators to publish courses in just a few clicks without developer intervention.',
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
            category: 'fullstack',
            technologies: ['Next.js', 'TypeScript', 'Sanity', 'Stripe', 'Tailwind CSS','Clerk'],
            github: 'https://github.com/rashmiofficial45/LMS-Platform',
            live: 'https://lms-platform-gamma-one.vercel.app/',
            featured: true,
        },
        {
            id: 2,
            title: 'FILE-STORE APP WITH REAL-TIME FILE SYNC',
            description: 'A multi‑tenant file storage solution in Next.js, Convex, and Clerk, based on RBAC(Role Based Access Control) and storing 3 types of file(Image, PDF , CSV)',
            image: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg',
            category: 'fullstack',
            technologies: ['Next', 'Convex', 'Shadcn', 'Clerk'],
            github: 'https://github.com/rashmiofficial45/file-storage-app',
            featured: true,
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard with detailed forecasts, interactive maps, and location-based recommendations.',
            image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg',
            category: 'frontend',
            technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'SCSS'],
            github: 'https://github.com',
            live: 'https://example.com',
            featured: false,
        },
        {
            id: 4,
            title: 'API Gateway Service',
            description: 'A scalable microservices API gateway with authentication, rate limiting, and comprehensive monitoring.',
            image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
            category: 'backend',
            technologies: ['Node.js', 'Docker', 'Redis', 'PostgreSQL', 'JWT'],
            github: 'https://github.com',
            live: 'https://example.com',
            featured: false,
        },
        {
            id: 5,
            title: 'Social Media Analytics',
            description: 'A comprehensive analytics platform for social media management with detailed insights and reporting.',
            image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
            category: 'fullstack',
            technologies: ['Python', 'Django', 'React', 'D3.js', 'PostgreSQL'],
            github: 'https://github.com',
            live: 'https://example.com',
            featured: true,
        },
        {
            id: 6,
            title: 'Mobile Banking App',
            description: 'A secure mobile banking application with biometric authentication and real-time transaction processing.',
            image: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg',
            category: 'mobile',
            technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Plaid API'],
            github: 'https://github.com',
            live: 'https://example.com',
            featured: false,
        },
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
    ];

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work and personal projects
                    </p>
                </motion.div>

                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">

                    {/* All Projects Grid */}
                    <TabsContent value={selectedCategory} className="mt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {filteredProjects.map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index, featured = false }: {
    project: any;
    index: number;
    featured?: boolean;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
        >
            <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <Button size="sm" variant="secondary" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <Eye className="w-4 h-4 mr-2" />
                                View
                            </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                            </a>
                        </Button>
                    </div>
                    {featured && (
                        <div className="absolute top-4 right-4">
                            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                        </div>
                    )}
                </div>

                {/* Project Content */}
                <CardHeader>
                    <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech: string) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 3}
                            </Badge>
                        )}
                    </div>

                    <div className="flex space-x-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3 h-3 mr-2" />
                                Live Demo
                            </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-3 h-3" />
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProjectsSection;