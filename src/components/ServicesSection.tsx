import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        "RESIDENTIAL DESIGN",
        "COMMERCIAL SPACES",
        "INTERIOR ARCHITECTURE",
        "LANDSCAPE PLANNING"
    ];

    return (
        <section id="services" className="bg-charcoal text-white py-16 sm:py-20 md:py-24 lg:py-32 flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full max-w-4xl px-4 sm:px-6 md:px-12"
            >
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center mb-12 sm:mb-16 tracking-tight text-white/90">OUR EXPERTISE</h2>

                <div className="flex flex-col w-full">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative border-t border-white/10 last:border-b py-6 sm:py-8 md:py-10 cursor-pointer overflow-hidden"
                        >
                            <div className="flex items-center justify-between px-2 sm:px-4 transition-transform duration-500 group-hover:px-4 sm:group-hover:px-8">
                                <span className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light tracking-widest text-white/70 transition-colors duration-500 group-hover:text-muted-gold">
                                    {service}
                                </span>
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-muted-gold opacity-0 transform -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" strokeWidth={1} />
                            </div>
                            <div className="absolute inset-0 bg-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ServicesSection;
