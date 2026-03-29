import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PopGrid } from "@/components/react-bits/PopGrid";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Muthu Aravind | MERN Stack Developer",
    description: "Portfolio of Muthu Aravind, a passionate MERN Stack Developer.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    forcedTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <div className="fixed inset-0 z-[-1]">
                        <PopGrid />
                    </div>
                    <div className="relative z-10">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
