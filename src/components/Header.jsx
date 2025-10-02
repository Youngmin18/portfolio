import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Acceuil", href: "#hero" },
        { name: "À propos", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Projets", href: "#projets" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 w-full bg-white/5 backdrop-blur-md shadow z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 via-fuchsia-500 to-blue-600">
                        Portfolio
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 text-white/90 font-medium">
                        {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="hover:text-transparent hover:bg-clip-text hover:scale-110 hover:bg-gradient-to-r from-fuchsia-500 to-blue-400"
                        >
                            {item.name}
                        </a>
                        ))}

                        <a
                            href="Laetitia_RAMANANTSOA_CV.pdf"
                            className="px-4 py-2 bg-gradient-to-tl from-blue-400 to-purple-600 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                            download={true}
                        >
                            CV
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:bg-white/10 p-2 rounded-md"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-2">
                        <div className="px-4 py-3 space-y-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="block px-3 py-2 text-white/90 hover:text-white rounded-md transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}

                            {/* Réservé visible en mobile aussi */}
                            <a
                                href="Laetitia_RAMANANTSOA_CV.pdf"
                                className="block px-3 py-2 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition"
                                onClick={() => setIsOpen(false)}
                                download={true}
                            >
                                CV
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
