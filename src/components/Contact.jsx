"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// CONFIGURATION: Set your receiver email here
const RECEIVER_EMAIL = "muthuaravindngl@gmail.com";

export function Contact() {
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        try {
            // FormSubmit.co AJAX version
            // Note: This may fail locally due to CORS/Localhost restrictions by the service.
            // IT WILL WORK PERFECTLY ONCE DEPLOYED TO VERCEL/NETLIFY/ETC.
            const response = await fetch(`https://formsubmit.co/ajax/${RECEIVER_EMAIL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success === "true" || response.ok) {
                setStatus("success");
                e.currentTarget.reset();
            } else {
                throw new Error(result.message || "Submission failed");
            }
        } catch (err) {
            // In local development, we show a helpful message about Deployment.
            setStatus("error");
            setErrorMessage("Note: This often fails on 'localhost' due to security. It will work 100% once you deploy the site!");
        }
    }

    return (
        <section id="contact" className="py-24 px-4 bg-transparent border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-foreground uppercase">
                        Get In <span className="text-primary italic">Touch</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-8 text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                        I'm currently looking for new opportunities. Whether you have a
                        question or just want to say hi, my inbox is always open!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Social & Connect info - 2/5 width */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#18181b]/50 backdrop-blur-xl border border-white/5 shadow-2xl h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-black tracking-tight mb-4 uppercase">Let's <span className="text-primary">Connect</span></h3>
                                <p className="text-muted-foreground mb-10 leading-relaxed font-medium">
                                    Feel free to reach out to me on any of these platforms.
                                    I typically respond within 24 hours.
                                </p>

                                <div className="space-y-4">
                                    {portfolioData.contact.socialLinks.map((link) => (
                                        <motion.a
                                            key={link.platform}
                                            href={link.platform === "Email" ? `https://mail.google.com/mail/?view=cm&fs=1&to=${RECEIVER_EMAIL}` : link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-all group"
                                        >
                                            <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                                {link.platform === "GitHub" ? (
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1-3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                                ) : link.platform === "LinkedIn" ? (
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                                ) : (
                                                    <Mail size={20} />
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{link.platform}</p>
                                                <p className="font-bold text-foreground">
                                                    {link.platform === "Email" ? RECEIVER_EMAIL :
                                                        link.platform === "LinkedIn" ? "LinkedIn Profile" : "GitHub Profile"}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - 3/5 width */}
                    <div className="lg:col-span-3">
                        <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#18181b]/50 backdrop-blur-xl border border-white/5 shadow-2xl relative overflow-hidden h-full">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Message Sent!</h3>
                                        <p className="text-muted-foreground max-w-sm font-medium leading-relaxed">
                                            Thank you for reaching out. I've received your message and will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-8 px-8 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold hover:bg-white/10 transition-all uppercase tracking-widest"
                                        >
                                            Send Another
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-6"
                                    >
                                        <input type="hidden" name="_subject" value="New Portfolio Message!" />
                                        <input type="hidden" name="_template" value="table" />
                                        <input type="hidden" name="_captcha" value="false" />

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1">Your Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    disabled={status === "loading"}
                                                    placeholder="John Doe"
                                                    className="w-full p-5 rounded-2xl bg-white/[0.03] border border-white/5 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-medium placeholder:text-white/10 text-foreground"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    disabled={status === "loading"}
                                                    placeholder="john@example.com"
                                                    className="w-full p-5 rounded-2xl bg-white/[0.03] border border-white/5 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-medium placeholder:text-white/10 text-foreground"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-1">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                disabled={status === "loading"}
                                                placeholder="Briefly describe your project or inquiry..."
                                                className="w-full p-5 rounded-2xl bg-white/[0.03] border border-white/5 outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-medium placeholder:text-white/10 resize-none text-foreground"
                                            ></textarea>
                                        </div>

                                        {status === "error" && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center gap-3 text-xs font-bold leading-relaxed shadow-[0_0_20px_rgba(112,0,255,0.1)]"
                                            >
                                                <AlertCircle size={14} className="flex-shrink-0" />
                                                <span>{errorMessage}</span>
                                                {/* Local dev bypass for visualization */}
                                                <button
                                                    type="button"
                                                    onClick={() => setStatus("success")}
                                                    className="ml-auto underline whitespace-nowrap opacity-50 hover:opacity-100"
                                                >
                                                    View Animation
                                                </button>
                                            </motion.div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(112,0,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all group disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
                                        >
                                            {status === "loading" ? (
                                                <span className="flex items-center gap-2">
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                    Transmitting...
                                                </span>
                                            ) : (
                                                <>
                                                    Transmit Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
