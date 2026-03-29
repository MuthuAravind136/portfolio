"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

// High-quality Raw SVGs for 100% Compatibility
const GithubIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1-3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

const LinkedinIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const ArrowRightIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);

const TechIcon = ({ type }: { type: 'code' | 'db' | 'layout' | 'cpu' }) => {
    switch (type) {
        case 'code':
            return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
        case 'db':
            return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
        case 'layout':
            return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>;
        case 'cpu':
            return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>;
        default:
            return null;
    }
};

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 pt-28 md:pt-20 text-center overflow-hidden font-outfit">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                {/* Elite Portrait Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="relative mb-12 group"
                >
                    {/* Advanced Neon Aura */}
                    <div className="absolute inset-[-15px] rounded-full bg-primary/30 blur-3xl animate-pulse group-hover:bg-primary/40 transition-all duration-700" />
                    <div className="absolute inset-[-25px] rounded-full bg-purple-600/20 blur-3xl animate-pulse delay-700 group-hover:bg-purple-600/30 transition-all duration-700" />

                    {/* Independent Spinning Ring Container */}
                    <div className="relative w-48 h-48 md:w-56 md:h-56">
                        {/* Spinning Energy Ring */}
                        <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-tr from-primary via-purple-400 to-primary animate-spin-slow shadow-[0_0_50px_rgba(112,0,255,0.4)]" />

                        {/* Stationary Content Mask */}
                        <div className="absolute inset-[3px] rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden border border-white/10 p-1">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image
                                    src="/profile.jpg"
                                    alt={portfolioData.name}
                                    fill
                                    className="object-cover scale-105 group-hover:scale-115 transition-transform duration-700"
                                    style={{ objectPosition: 'center 25%' }}
                                    priority
                                />
                                {/* Glass Shine Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Floating Tech Icons */}
                    <TechParticle icon={<TechIcon type="code" />} className="top-0 -left-8 text-primary/60" delay={0.2} />
                    <TechParticle icon={<TechIcon type="db" />} className="bottom-4 -right-8 text-purple-400/60" delay={0.5} />
                    <TechParticle icon={<TechIcon type="layout" />} className="-top-4 right-2 text-primary/50" delay={0.8} />
                </motion.div>

                {/* Typography Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="space-y-6 w-full"
                >
                    <div className="flex flex-col items-center">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] md:leading-none">
                            <span className="text-foreground">Hi, I'm </span>
                            <span className="whitespace-nowrap bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(112,0,255,0.3)] bg-[length:200%_auto] animate-gradient">
                                {portfolioData.name}
                            </span>
                        </h1>
                    </div>

                    <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium px-4">
                        Crafting High-End <span className="text-foreground font-bold underline decoration-primary/50 underline-offset-4">Full Stack</span> Experiences.
                        Digital Architect specializing in MERN.
                    </p>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(112,0,255,0.4)] hover:shadow-purple-500/50 transition-all"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Projects <div className="group-hover:translate-x-1 transition-transform"><ArrowRightIcon /></div>
                            </span>
                        </motion.a>

                        <div className="flex items-center gap-4">
                            <SocialIcon href={portfolioData.github} icon={<GithubIcon />} />
                            <SocialIcon href={portfolioData.linkedin} icon={<LinkedinIcon />} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function TechParticle({ icon, className, delay }: { icon: React.ReactNode, className: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute z-20 p-2 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl ${className}`}
        >
            {icon}
        </motion.div>
    );
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-muted-foreground hover:text-primary transition-all backdrop-blur-sm"
        >
            {icon}
        </motion.a>
    );
}
