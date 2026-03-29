"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function About() {
    return (
        <section id="about" className="py-24 px-4 bg-transparent">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                    >
                        <p>{portfolioData.about}</p>
                        <p>
                            I thrive on solving complex problems and turning ideas into functional,
                            visually appealing web applications. My goal is to always stay at the
                            cutting edge of technology and deliver the best possible user experience.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-[#18181b] border border-white/5 rounded-2xl flex items-center justify-center">
                            <div className="p-8 text-center">
                                <span className="text-6xl font-bold text-primary italic opacity-20 block mb-4">"</span>
                                <p className="text-xl font-medium text-foreground italic">
                                    Pushing the boundaries of web development, one line of code at a time.
                                </p>
                                <span className="text-6xl font-bold text-primary italic opacity-20 block mt-4 text-right">"</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
