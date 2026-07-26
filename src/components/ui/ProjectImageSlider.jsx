import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProjectImageSlider({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="relative h-44 w-full bg-transparent rounded-t-xl flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Aucune image</span>
            </div>
        );
    }

    return (
        <div className="relative h-48 sm:h-52 w-full rounded-t-xl p-3 flex flex-col justify-between overflow-hidden group/slider bg-transparent">

            {/* 1. Fausse barre de navigateur (Browser Mockup Header) */}
            <div className="flex items-center gap-1.5 mb-2 shrink-0 opacity-80 group-hover/slider:opacity-100 transition-opacity">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] text-muted-foreground/60 ml-2 font-mono truncate max-w-37.5">
                    {title.toLowerCase().replace(/\s+/g, '')}.app
                </span>
            </div>

            {/* 2. Conteneur d'image */}
            <div className="relative flex-1 w-full overflow-hidden rounded-md shadow-md shadow-black/30 bg-transparent">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`${title} - image${currentIndex + 1}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/slider:scale-105"
                    />
                </AnimatePresence>

                <div className="absolute inset-0 bg-slate-950/10 group-hover/slider:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>

            {images.length > 1 && (
                <div className="relative z-20 flex justify-center items-center gap-1.5 pt-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setCurrentIndex(idx);
                            }}
                            aria-label={`Voir image ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx
                                ? "w-5 bg-primary shadow-xs shadow-primary/50"
                                : "w-1.5 bg-foreground/20 hover:bg-foreground/50 dark:bg-white/30 dark:hover:bg-white/70"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
