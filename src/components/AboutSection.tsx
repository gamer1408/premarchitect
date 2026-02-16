import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.15, 1.2]);

    return (
        <section id="about" ref={sectionRef} className="flex flex-col md:flex-row min-h-screen bg-charcoal text-white overflow-hidden">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-auto relative overflow-hidden order-1 group">
                <motion.div
                    className="w-full h-full relative"
                    style={{ y, scale }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1964&auto=format&fit=crop"
                            alt="Architectural Detail"
                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-1000" />
                    </motion.div>
                </motion.div>

                {/* Reveal Curtain */}
                <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 bg-deep-black origin-bottom z-20"
                />
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-0 relative z-10 order-2 bg-deep-black">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col gap-4 sm:gap-6 md:gap-8"
                >
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                        TIMELESS <br />
                        <span className="text-muted-gold italic">ELEGANCE</span>
                    </h2>

                    <p className="font-sans text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-md">
                        We believe that true luxury lies in simplicity. Our philosophy is rooted in creating spaces that are not just visually stunning but also sustainable and deeply connected to their environment. Every line, every texture, and every shadow is meticulously planned to evoke a sense of calm and permanence.
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "3rem" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-[1px] bg-muted-gold mt-2 sm:mt-4"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
