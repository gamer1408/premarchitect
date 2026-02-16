import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'PROJECTS', href: '#projects' },
        { name: 'SERVICES', href: '#services' },
        { name: 'ABOUT', href: '#about' },
        { name: 'CONTACT', href: '#contact' }
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'bg-deep-black/95 backdrop-blur-md border-b border-white/5'
                        : 'bg-transparent'
                    }`}
                style={{ opacity: scrolled ? headerOpacity : 1 }}
            >
                <nav className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-6 md:py-8 flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative group z-50"
                    >
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-[0.2em] font-bold text-white cursor-pointer">
                            AURUM
                        </h1>
                        <motion.div
                            className="absolute -bottom-1 left-0 h-[1px] bg-muted-gold"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-16"
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                className="relative group font-sans text-xs tracking-[0.2em] text-stone-400 hover:text-white transition-colors duration-300"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-muted-gold transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Button - Desktop */}
                    <motion.a
                        href="mailto:urozaliyevyahyobek@gmail.com"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="hidden lg:block group relative overflow-hidden"
                    >
                        <div className="border border-muted-gold/50 px-6 py-3 relative z-10 transition-colors duration-500">
                            <span className="font-sans text-xs tracking-[0.2em] uppercase text-white group-hover:text-black transition-colors duration-500">
                                Let's Talk
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-muted-gold transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden flex flex-col gap-1.5 group z-50"
                        aria-label="Menu"
                    >
                        <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:bg-muted-gold'}`} />
                        <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'group-hover:bg-muted-gold group-hover:w-4'}`} />
                        <span className={`w-6 h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:bg-muted-gold'}`} />
                    </motion.button>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{
                    opacity: mobileMenuOpen ? 1 : 0,
                    x: mobileMenuOpen ? 0 : '100%'
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 bg-deep-black z-40 md:hidden"
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: mobileMenuOpen ? 1 : 0,
                                y: mobileMenuOpen ? 0 : 20
                            }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="font-serif text-3xl sm:text-4xl text-white hover:text-muted-gold transition-colors duration-300"
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    {/* Mobile CTA */}
                    <motion.a
                        href="mailto:urozaliyevyahyobek@gmail.com"
                        onClick={handleLinkClick}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: mobileMenuOpen ? 1 : 0,
                            y: mobileMenuOpen ? 0 : 20
                        }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="group relative overflow-hidden mt-8"
                    >
                        <div className="border border-muted-gold px-10 py-4 relative z-10 transition-colors duration-500">
                            <span className="font-sans text-sm tracking-[0.2em] uppercase text-white group-hover:text-black transition-colors duration-500">
                                Let's Talk
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-muted-gold transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                    </motion.a>
                </div>
            </motion.div>
        </>
    );
};

export default Header;
