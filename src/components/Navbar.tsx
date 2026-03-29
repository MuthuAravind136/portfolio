"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

// Custom SVG Icons for Stability & Style
const MenuIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

export function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled ? "bg-zinc-950/98 backdrop-blur-2xl border-b border-white/5 py-4 shadow-2xl shadow-black/50" : "bg-zinc-950/40 backdrop-blur-xl py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center font-outfit">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="group flex items-center gap-1"
                >
                    <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(112,0,255,0.4)] bg-[length:200%_auto] animate-gradient group-hover:scale-110 transition-transform duration-500">
                        MA.
                    </span>
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        {isOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-zinc-950 border-b border-white/5 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-black tracking-tighter hover:text-primary transition-colors uppercase"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
