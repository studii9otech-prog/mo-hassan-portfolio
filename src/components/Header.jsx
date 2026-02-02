import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Work', path: '/work' },
        { name: 'Experience', path: '/experience' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 w-full flex justify-between items-center py-6 px-4 md:px-12 z-50 mix-blend-difference text-white"
            >
                <Link to="/" className="font-bold text-xl tracking-tighter">
                    MHF<span className="text-primary">.</span>
                </Link>

                <nav className="hidden md:flex gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        item.path.startsWith('#') || (item.path.startsWith('/') && item.path.includes('#')) ? (
                            <a key={item.name} href={item.path} className="hover:text-primary transition-colors" aria-label={item.name}>
                                {item.name}
                            </a>
                        ) : (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => isActive ? "text-primary" : "hover:text-primary transition-colors"}
                            >
                                {item.name}
                            </NavLink>
                        )
                    ))}
                </nav>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-primary focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-8 md:hidden text-neutral-900"
                    >
                        <nav className="flex flex-col gap-8 text-center">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    {item.path.startsWith('#') || (item.path.startsWith('/') && item.path.includes('#')) ? (
                                        <a
                                            href={item.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-4xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={({ isActive }) => `text-4xl font-black uppercase tracking-tighter hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`}
                                        >
                                            {item.name}
                                        </NavLink>
                                    )}
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
