"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

// Custom SVG Icons for Tech Categories (Higher Detail for Bento)
const CategoryIcon = ({ type, className }) => {
    switch (type.toLowerCase()) {
        case 'frontend':
            return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line></svg>;
        case 'backend':
            return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6-6-6M12 19h8"></path><rect x="2" y="2" width="20" height="20" rx="2" ry="2" opacity="0.3"></rect></svg>;
        case 'database':
            return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>;
        case 'tools':
            return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
        default:
            return null;
    }
};

const getCategoryConfig = (category) => {
    switch (category.toLowerCase()) {
        case 'frontend':
            return { color: 'text-cyan-400', glow: 'shadow-cyan-500/20', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', laser: 'bg-cyan-400', span: 'md:col-span-2' };
        case 'backend':
            return { color: 'text-emerald-400', glow: 'shadow-emerald-500/20', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', laser: 'bg-emerald-400', span: 'md:col-span-2' };
        case 'database':
            return { color: 'text-amber-400', glow: 'shadow-amber-500/20', border: 'border-amber-500/30', bg: 'bg-amber-500/10', laser: 'bg-amber-400', span: 'md:col-span-2' };
        case 'tools':
            return { color: 'text-violet-400', glow: 'shadow-violet-500/20', border: 'border-violet-500/30', bg: 'bg-violet-500/10', laser: 'bg-violet-400', span: 'md:col-span-2' };
        default:
            return { color: 'text-primary', glow: 'shadow-primary/20', border: 'border-primary/30', bg: 'bg-primary/10', laser: 'bg-primary', span: 'md:col-span-1' };
    }
};

export function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-transparent overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-foreground">
                        Technical <span className="text-primary italic">Skills</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {portfolioData.skills.map((skillGroup, groupIndex) => {
                        const config = getCategoryConfig(skillGroup.category);
                        return (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                                className={`${config.span} relative group`}
                            >
                                {/* Laser Tracing Border Effect - Snappier Durations */}
                                <div className="absolute inset-0 rounded-[2rem] p-[1px] overflow-hidden pointer-events-none z-10">
                                    <div className={`absolute top-0 left-0 h-[2px] w-0 ${config.laser} group-hover:w-full transition-all duration-300 ease-in-out`} />
                                    <div className={`absolute top-0 right-0 w-[2px] h-0 ${config.laser} group-hover:h-full transition-all duration-300 delay-100 ease-in-out`} />
                                    <div className={`absolute bottom-0 right-0 h-[2px] w-0 ${config.laser} group-hover:w-full transition-all duration-300 delay-200 ease-in-out`} />
                                    <div className={`absolute bottom-0 left-0 w-[2px] h-0 ${config.laser} group-hover:h-full transition-all duration-300 delay-300 ease-in-out`} />
                                </div>

                                <div className="relative h-full p-6 md:p-10 rounded-[2rem] bg-[#18181b]/50 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden transition-all duration-300 group-hover:bg-[#18181b]/80 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                                    {/* Holographic Watermark Icon */}
                                    <div className={`absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.1] group-hover:scale-110 transition-all duration-500 ${config.color}`}>
                                        <CategoryIcon type={skillGroup.category} className="w-48 h-48" />
                                    </div>

                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`p-4 rounded-2xl ${config.bg} ${config.color} shadow-lg shadow-black/20`}>
                                            <CategoryIcon type={skillGroup.category} className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className={`text-2xl font-black tracking-tight ${config.color} uppercase text-[10px] tracking-[0.4em]`}>
                                                {skillGroup.category}
                                            </h3>
                                            <div className={`h-1 w-12 ${config.laser} rounded-full mt-1 opacity-50`}></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3 relative z-20">
                                        {skillGroup.items.map((skill, index) => (
                                            <motion.span
                                                key={skill}
                                                whileHover={{ y: -4, scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}
                                                className="px-4 py-2 text-sm font-bold rounded-2xl bg-white/[0.03] border border-white/5 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default shadow-sm"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
