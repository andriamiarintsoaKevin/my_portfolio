
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Composant de carrousel d'images avec navigation par dots uniquement
export default function ProjectImageSlider({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Si une seule image ou aucune, affichage standard sans dots
    if (!images || images.length <= 1) {
        return (
            <div className="relative h-48 overflow-hidden">
                <img
                    src={images?.[0] || ""}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />
            </div>
        );
    }

    return (
        <div className="relative h-48 overflow-hidden group/slider">
            {/* Slider avec animation Framer Motion */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${title} - image ${currentIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors pointer-events-none" />

            {/* Navigation par Dots uniquement (Centrés en bas) */}
            <div className="absolute bottom-2.5 left-0 right-0 z-20 flex justify-center items-center gap-1.5 px-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(idx);
                        }}
                        aria-label={`Voir image ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                            ? "w-6 bg-primary shadow-sm shadow-black/50"
                            : "w-2 bg-white/60 hover:bg-white/90 backdrop-blur-xs"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
