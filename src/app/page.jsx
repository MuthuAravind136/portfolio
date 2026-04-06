import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <footer className="py-12 border-t text-center text-muted-foreground text-sm font-medium">
                <p>© {new Date().getFullYear()} Muthu Aravind. All rights reserved.</p>
            </footer>
        </main>
    );
}
