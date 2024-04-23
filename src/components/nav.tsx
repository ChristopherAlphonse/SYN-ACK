"use client";

import { useState } from "react";

interface NavbarProps {
    handleFileUpload: (file: File) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleFileUpload }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white">
                            SYN/ACK
                        </a>
                    </div>
                    <div className="hidden md:block">ye</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
