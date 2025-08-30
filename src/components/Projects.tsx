"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Eye } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    github: string;
    live?: string; // optional
}

const ProjectsSection = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "LMS WITH ADMIN DASHBOARD",
            description:
                "CMS-driven LMS using Next.js, Sanity, and Clerk — enabling content creators to publish courses in just a few clicks without developer intervention.",
            image: "/lms.png",
            category: "fullstack",
            technologies: ["Next.js", "TypeScript", "Sanity", "Stripe", "Tailwind CSS", "Clerk"],
            github: "https://github.com/rashmiofficial45/LMS-Platform",
            live: "https://lms-platform-gamma-one.vercel.app/",
        },
        {
            id: 2,
            title: "FILE-STORE APP WITH REAL-TIME FILE SYNC",
            description:
                "A multi-tenant file storage solution in Next.js, Convex, and Clerk, based on RBAC(Role Based Access Control) and storing 3 types of file(Image, PDF , CSV)",
            image: "/file-store.png",
            category: "fullstack",
            technologies: ["Next", "Convex", "Shadcn", "Clerk"],
            github: "https://github.com/rashmiofficial45/file-storage-app",
            live: "https://file-storage-app-nine.vercel.app/"
        },
        {
            id: 3,
            title: "Excalidraw App",
            description:
                "An Excalidraw like app to see the functionality of canvas with zoom and draw features",
            image: "/icon.webp",
            category: "fullstack",
            technologies: ["Nodejs", "NextJs", "Websocket", "zod"],
            github: "https://github.com/rashmiofficial45/Excalidraw-app",
        },
    ];

    // categories → dynamic & future-proof
    const categories = Array.from(new Set(["all", ...projects.map((p) => p.category)]));
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const filteredProjects =
        selectedCategory === "all"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-10 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
                    <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work and personal projects
                    </p>
                </motion.div>

                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                    {/* Optional: Dynamic Category Filters */}
                    <TabsList className="mb-6 flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <TabsTrigger key={cat} value={cat} className="capitalize">
                                {cat}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* One content area bound to current value */}
                    <TabsContent value={selectedCategory} className="mt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
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

const ProjectCard = ({
    project,
    index,
    featured = false,
}: {
    project: Project;
    index: number;
    featured?: boolean;
}) => {
    const [showAllTech, setShowAllTech] = useState(false);

    const visibleTechnologies = showAllTech
        ? project.technologies
        : project.technologies.slice(0, 3);

    const toggleTech = () => setShowAllTech((s) => !s);
    const toggleKey = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTech();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group"
        >
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl group-hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                        {project.live && (
                            <Button size="sm" variant="secondary" asChild>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                    <Eye className="w-4 h-4 mr-2" />
                                    View
                                </a>
                            </Button>
                        )}
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
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>

                    {/* Technologies (smooth expand/collapse) */}
                    {/* Place near other imports: import { motion, AnimatePresence } from "framer-motion" */}
                    <motion.div
                        layout
                        initial={false}
                        // smoother layout transition for height changes
                        transition={{ layout: { duration: 0.42, ease: [0.2, 0.8, 0.2, 1] } }}
                        className="flex flex-wrap gap-2 items-center overflow-hidden"
                        aria-live="polite"
                    >
                        {/* parent controls stagger for a pleasant micro-interaction */}
                        <AnimatePresence initial={false}>
                            {visibleTechnologies.map((tech) => (
                                <motion.span
                                    key={tech}
                                    layout
                                    // enter/exit animations tuned for smoothness (spring + short opacity fade)
                                    initial={{ opacity: 0, y: -6, scale: 0.985 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -8, scale: 0.985 }}
                                    transition={{
                                        opacity: { duration: 0.16 },
                                        y: { type: "spring", stiffness: 260, damping: 28 },
                                        scale: { duration: 0.14 },
                                    }}
                                >
                                    <Badge variant="outline" className="text-xs">
                                        {tech}
                                    </Badge>
                                </motion.span>
                            ))}
                        </AnimatePresence>

                        {project.technologies.length > 3 && (
                            // The toggle itself participates in layout for seamless resizing
                            <motion.span
                                layout
                                initial={false}
                                transition={{ layout: { duration: 0.35, ease: [0.2, 0.8, 0.2, 1] } }}
                            >
                                <Badge
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={showAllTech}
                                    onKeyDown={toggleKey}
                                    onClick={toggleTech}
                                    variant="outline"
                                    className="text-xs cursor-pointer hover:bg-muted focus-visible:outline focus-visible:outline-offset-2"
                                    title={showAllTech ? "Show less" : "Show all technologies"}
                                >
                                    {showAllTech ? "Show less" : `+${project.technologies.length - 3}`}
                                </Badge>
                            </motion.span>
                        )}
                    </motion.div>

                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ProjectsSection;
