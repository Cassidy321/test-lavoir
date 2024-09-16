"use client";
import { useState } from "react";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Bouton burger */}
            <button
                className="fixed top-4 left-4 z-50 p-2 text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggleMenu}
            >
                {/* Icône burger */}
                <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                    />
                </svg>
            </button>

            {/* Menu déroulant */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-6 mt-8">
                    <h2 className="text-2xl font-bold mb-6">Menu</h2>
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <a href="/" className="text-white hover:text-indigo-400" onClick={toggleMenu}>
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="/signup" className="text-white hover:text-indigo-400" onClick={toggleMenu}>
                                    inscription
                                </a>
                            </li>
                            <li>
                                <a href="/login" className="text-white hover:text-indigo-400" onClick={toggleMenu}>
                                    connexion
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
