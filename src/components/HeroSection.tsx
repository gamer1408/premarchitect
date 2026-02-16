import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start start", "end start"]
    });

    // Parallax effect for hero image
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Stagger configurations
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            }
        },
    };

    return (
        <div className="relative min-h-screen bg-deep-black text-white overflow-hidden font-sans selection:bg-muted-gold selection:text-black">
            {/* Main Content Split */}
            <main className="flex flex-col md:flex-row min-h-screen">

                {/* Left Side: Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 relative z-10 order-2 md:order-1 min-h-[50vh] md:min-h-screen bg-deep-black md:bg-transparent py-12 md:py-0">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 pt-16 sm:pt-20 md:pt-0"
                    >
                        {/* Title */}
                        <div className="overflow-hidden w-full">
                            <motion.h1
                                variants={itemVariants}
                                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[1.0] md:leading-[0.9] text-white tracking-tight"
                            >
                                DESIGNING <br />
                                <span className="text-muted-gold/90 font-light italic pl-1 md:pl-2">FUTURE</span>
                            </motion.h1>
                        </div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="font-sans text-neutral-400 text-xs sm:text-sm md:text-base max-w-sm md:max-w-md tracking-wide leading-relaxed font-light pl-1"
                        >
                            We craft spaces that transcend time. Bringing sophisticated minimalism and luxury to modern architecture.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div variants={itemVariants} className="pl-1">
                            <a
                                href="#projects"
                                className="group relative inline-block overflow-hidden rounded-sm"
                            >
                                <div className="border border-muted-gold px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 relative z-10 transition-colors duration-500">
                                    <span className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-white group-hover:text-black transition-colors duration-500 font-medium">
                                        View Projects
                                    </span>
                                </div>

                                {/* Button Fill Animation */}
                                <div className="absolute inset-0 bg-muted-gold transform translate-x-[-101%] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Aesthetic Decor Line - Bottom Left */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "4rem", opacity: 0.3 }}
                        transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                        className="absolute bottom-8 sm:bottom-12 left-4 sm:left-6 md:left-24 h-[1px] bg-white hidden sm:block"
                    />
                </div>

                {/* Right Side: Image with Zoom Effect */}
                <div ref={imageRef} className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative overflow-hidden order-1 md:order-2 group">
                    <motion.div
                        className="w-full h-full relative"
                        style={{ y, scale }}
                    >
                        {/* The Placeholder Image - Original */}
                        <div className="w-full h-full bg-charcoal relative overflow-hidden">
                            <motion.img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                                alt="Luxury Dark Architecture"
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-deep-black/40 via-transparent to-transparent md:from-transparent md:via-transparent md:to-transparent transition-opacity duration-700 group-hover:bg-black/0" />
                        </div>
                    </motion.div>

                    {/* Reveal Curtain */}
                    <motion.div
                        initial={{ scaleX: 1 }}
                        animate={{ scaleX: 0 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 bg-deep-black origin-right z-20"
                    />
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
