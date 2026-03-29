"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SpotlightCard } from "./react-bits/SpotlightCard";

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-transparent">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-foreground">
                        Creative <span className="text-primary italic">Gallery</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Fellowship Projects */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h3 className="text-2xl md:text-3xl font-black text-foreground flex items-center gap-4">
                            <span className="h-2 w-12 bg-gradient-to-r from-primary to-purple-500 rounded-full"></span>
                            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Fellowship</span> <span className="italic opacity-80">Projects</span>
                        </h3>
                        <p className="text-muted-foreground mt-3 text-lg font-medium">Real-world projects developed during my Full Stack Developer Fellowship.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
                        {portfolioData.fellowshipProjects.map((project, index) => {
                            const isLastOdd = index === portfolioData.fellowshipProjects.length - 1 && portfolioData.fellowshipProjects.length % 2 !== 0;
                            return (
                                <ProjectCard
                                    key={project.name}
                                    project={project}
                                    index={index}
                                    isFellowship={true}
                                    className={isLastOdd ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto w-full" : ""}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Personal Projects */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h3 className="text-2xl md:text-3xl font-black text-foreground flex items-center gap-4">
                            <span className="h-2 w-12 bg-gradient-to-r from-purple-500 to-primary rounded-full"></span>
                            <span className="bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">Personal</span> <span className="italic opacity-80">Projects</span>
                        </h3>
                        <p className="text-muted-foreground mt-3 text-lg font-medium">Experimental and side projects built to explore new technologies.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {portfolioData.personalProjects.map((project, index) => (
                            <ProjectCard key={project.name} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, isFellowship, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={className}
        >
            <SpotlightCard className="group p-1 rounded-2xl bg-[#18181b] hover:from-primary/20 hover:to-purple-500/20 transition-all duration-500 border border-white/10 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 h-full">
                <div className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <Terminal size={24} />
                        </div>
                        {!isFellowship && project.github && (
                            <div className="flex gap-4 text-muted-foreground">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1-3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                </a>
                            </div>
                        )}
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-sm font-semibold text-primary/80 mb-4">{project.stack}</p>
                    <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                        {project.description}
                    </p>

                    {!isFellowship && project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary group-hover:gap-3 transition-all"
                        >
                            View Repository <ArrowRight size={16} />
                        </a>
                    )}
                </div>
            </SpotlightCard>
        </motion.div>
    );
}
