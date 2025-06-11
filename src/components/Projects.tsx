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
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.',
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
            category: 'fullstack',
            technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
            github: 'https://github.com',
            live: 'https://example.com',
            featured: true,
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, team collaboration, and advanced filtering.',
            image: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg',
            category: 'frontend',
            technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
            github: 'https://github.com',
            live: 'https://example.com',
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
        { id: 'mobile', label: 'Mobile' },
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work and personal projects
                    </p>
                </motion.div>

                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                    {/* Category Filter */}
                    <motion.div
                        className="flex justify-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <TabsList className="grid grid-cols-5 w-full max-w-md">
                            {categories.map((category) => (
                                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                                    {category.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </motion.div>

                    {/* Featured Projects Highlight */}
                    {selectedCategory === 'all' && (
                        <motion.div
                            className="mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Work</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {featuredProjects.slice(0, 3).map((project, index) => (
                                    <ProjectCard key={project.id} project={project} index={index} featured />
                                ))}
                            </div>
                        </motion.div>
                    )}

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