import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/images/logo.svg" alt="MESEZ Logo" className="h-8 w-8" />
                    <span className="text-white font-bold text-xl tracking-tight">MESEZ.ME</span>
                </Link>
                <nav className="hidden md:flex gap-6 text-white text-sm font-medium">
                    <a href="#features" className="hover:text-indigo-300">Features</a>
                    <a href="#philosophy" className="hover:text-indigo-300">Philosophy</a>
                    <a href="#download" className="hover:text-indigo-300">Download</a>
                    <a href="#about" className="hover:text-indigo-300">About</a>
                    <a href="#blog" className="hover:text-indigo-300">Blog</a>
                    <a href="/privacy" className="hover:text-indigo-300">Privacy</a>
                    <a href="/terms" className="hover:text-indigo-300">Terms</a>
                </nav>
            </div>
        </header>
    );
}
