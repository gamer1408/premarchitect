import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-deep-black text-white relative overflow-hidden">
            {/* Large "Let's Work Together" Section */}
            <div className="border-t border-white/5 py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white mb-4 sm:mb-6 leading-tight">
                            LET'S WORK <br />
                            <span className="text-muted-gold italic">TOGETHER</span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="font-sans text-stone-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4"
                        >
                            Have a project in mind? Let's create something extraordinary together.
                        </motion.p>
                    </motion.div>

                    {/* Email CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <a
                            href="mailto:urozaliyevyahyobek@gmail.com"
                            className="group relative inline-flex items-center gap-2 sm:gap-3 md:gap-4 border border-muted-gold px-6 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 lg:px-16 lg:py-8 overflow-hidden transition-all duration-500 hover:border-muted-gold/50"
                        >
                            <span className="relative z-10 font-sans text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[0.15em] uppercase text-white group-hover:text-black transition-colors duration-500 font-medium">
                                Get in Touch
                            </span>
                            <ArrowUpRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-muted-gold group-hover:text-black transition-all duration-500 group-hover:rotate-45" strokeWidth={1.5} />

                            {/* Button Fill Animation */}
                            <div className="absolute inset-0 bg-muted-gold transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
                        </a>
                    </motion.div>

                    {/* Email Display */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-center mt-6 sm:mt-8 px-4"
                    >
                        <a
                            href="mailto:urozaliyevyahyobek@gmail.com"
                            className="font-sans text-xs sm:text-sm md:text-base text-stone-500 hover:text-muted-gold transition-colors duration-300 tracking-wide break-all"
                        >
                            urozaliyevyahyobek@gmail.com
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Animated Divider Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-[1px] bg-gradient-to-r from-transparent via-muted-gold to-transparent origin-center"
            />

            {/* Bottom Footer Info */}
            <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-12 md:py-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 sm:gap-10 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-3 sm:gap-4"
                    >
                        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-widest font-bold">AURUM</h3>
                        <p className="font-sans text-[10px] sm:text-xs md:text-sm text-stone-400 max-w-xs leading-relaxed">
                            Designing the future with timeless elegance. <br />
                            © 2026 Aurum Architects. All rights reserved.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 font-sans text-xs sm:text-sm tracking-widest uppercase text-stone-400"
                    >
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <span className="text-white/60 text-[10px] sm:text-xs mb-1 sm:mb-2">Social</span>
                            <a href="#" className="hover:text-muted-gold transition-colors duration-300 flex items-center gap-2 group">
                                Instagram
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={2} />
                            </a>
                            <a href="#" className="hover:text-muted-gold transition-colors duration-300 flex items-center gap-2 group">
                                LinkedIn
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={2} />
                            </a>
                        </div>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <span className="text-white/60 text-[10px] sm:text-xs mb-1 sm:mb-2">Contact</span>
                            <a href="mailto:urozaliyevyahyobek@gmail.com" className="hover:text-muted-gold transition-colors duration-300 normal-case tracking-normal break-all max-w-[200px] sm:max-w-none">
                                urozaliyevyahyobek@gmail.com
                            </a>
                            <span className="text-stone-500 cursor-default">+1 (555) 123-4567</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Background Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-80 md:h-96 bg-gradient-to-t from-charcoal/20 to-transparent pointer-events-none" />
        </footer>
    );
};

export default Footer;
