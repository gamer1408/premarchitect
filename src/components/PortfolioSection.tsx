import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PortfolioSection = () => {
    const projects = [
        {
            id: 1,
            title: "THE ONYX VILLA",
            location: "Kyoto, Japan",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            gridSpan: "col-span-1 md:row-span-2"
        },
        {
            id: 2,
            title: "SKYLINE PENTHOUSE",
            location: "New York, USA",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
            gridSpan: "col-span-1"
        },
        {
            id: 3,
            title: "DESERT RETREAT",
            location: "Arizona, USA",
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
            gridSpan: "col-span-1"
        },
        {
            id: 4,
            title: "NORDIC SANCTUARY",
            location: "Oslo, Norway",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
            gridSpan: "col-span-1"
        }
    ];

    return (
        <section id="projects" className="bg-deep-black text-white py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-12 sm:mb-16 md:mb-24 flex flex-col items-center text-center"
            >
                <span className="text-muted-gold font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 sm:mb-4">Selected Works</span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">CRAFTED SPACES</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 auto-rows-[350px] sm:auto-rows-[400px] md:auto-rows-[500px] lg:auto-rows-[700px]">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

// Extracted Component for better performance and individual scroll hook
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the image inside the card
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <motion.div
            ref={cardRef}
            className={`relative group overflow-hidden cursor-pointer ${project.gridSpan}`}
        >
            {/* Image Container with Parallax */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    style={{ y, scale: 1.15 }}
                    className="w-full h-full"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-[50%] group-hover:scale-105"
                    />
                </motion.div>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />

            {/* Reveal Curtain (Entrance Animation) */}
            <motion.div
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-charcoal origin-top z-20"
            />

            {/* Content (Center) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4">
                <div className="overflow-hidden">
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-muted-gold tracking-wide mb-1 sm:mb-2 text-center translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                        {project.title}
                    </h3>
                </div>
                <div className="overflow-hidden">
                    <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.3em] text-white/90 uppercase translate-y-full transition-transform duration-700 delay-75 group-hover:translate-y-0">
                        {project.location}
                    </p>
                </div>
            </div>

            {/* Hover Border/Frame Effect */}
            <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-white/20 opacity-0 scale-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 pointer-events-none" />
        </motion.div>
    );
};

export default PortfolioSection;
