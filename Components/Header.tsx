import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollHidden, setScrollHidden] = useState(false);

    const handleFunctions = (isMenuOpen: boolean) => {
        setIsMenuOpen(isMenuOpen);
        handleButtonClick();
    }
    const handleButtonClick = () => {
        setScrollHidden(!scrollHidden);
        document.body.style.overflow = !scrollHidden ? 'hidden' : 'auto';
      };
    
    const handleResumeClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        window.open('/api/resume.file', '_blank');
    };
    return(
        <header className='from-gray-900 to-black text-white w-full p-4 border-b border-gray-800 '>
            <nav className="relative">
                {/* Mobile menu button with hamburger icon */}
                <div className="md:hidden absolute left-4 top-1/2 transform -translate-y-1/2 z-50">
                    <button
                        onClick={() => handleFunctions(!isMenuOpen)}
                        className="p-2 text-white hover:bg-gray-700 rounded-md transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                // X icon when menu is open
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            ) : (
                                // Hamburger icon when menu is closed
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16" 
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Full screen mobile menu overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 md:hidden">
                        <div className="flex flex-col items-center justify-center h-full ">
                            <ul className="flex flex-col space-y-8 text-center">
                                <li>
                                    <Link 
                                        href="/" 
                                        className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                                        onClick={() => handleFunctions(false)}
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/about" 
                                        className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                                        onClick={() => handleFunctions(false)}
                                    >
                                        About Me
                                    </Link>
                                </li>

                                <li>
                                    <Link 
                                        href="/contact" 
                                        className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                                        onClick={() => handleFunctions(false)}
                                    >
                                        Contact Me
                                    </Link>
                                </li>
                                <button 
                                        onClick={(e) => {
                                            handleResumeClick(e);
                                            handleFunctions(false);
                                        }}
                                        className="text-2xl font-bold text-white hover:text-blue-400 transition-colors cursor-pointer"
                                    >
                                        Resume
                                    </button>
                            </ul>
                        </div>
                    </div>
                )}

                {/* Desktop navigation links */}
                <ul className="hidden md:flex flex-row space-x-6 justify-center ">
                    <li>
                        <Link href="/" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-center">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-center">
                            About Me
                        </Link>
                    </li>

                    <li>
                        <Link href="/contact" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-center">
                            Contact Me
                        </Link>
                    </li>
                    <button onClick={handleResumeClick} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-center cursor-pointer">
                            Resume
                        </button>
                </ul>
            </nav>
        </header>
    )
}