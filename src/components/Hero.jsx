import React from "react";
import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/assets/images/hero_bg.jpg')] bg-cover bg-center opacity-60 grayscale-[30%] mix-blend-normal"></div>

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/60"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-prodigio-red tracking-[0.8em] text-sm md:text-lg mb-6 uppercase font-bold drop-shadow-md">
            Rapper • Compositor • Visionário
          </h2>
          <h1 className="text-7xl md:text-9xl font-display text-white mb-8 tracking-tighter drop-shadow-2xl mix-blend-overlay opacity-90">
            PRODÍGIO
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light leading-relaxed drop-shadow-sm">
            A voz da Força Suprema. Estética urbana, lírica afiada e impacto
            visual.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-prodigio-red hover:bg-red-900 text-white px-10 py-4 rounded-none uppercase tracking-widest font-bold transition-all flex items-center gap-3 group shadow-lg hover:shadow-red-900/50">
              <Play
                size={24}
                className="fill-current group-hover:scale-110 transition-transform"
              />
              Ouvir Agora
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white px-10 py-4 rounded-none uppercase tracking-widest font-bold transition-all shadow-lg hover:shadow-white/20">
              Ver Videoclipes
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
        onClick={() => {
          document
            .getElementById("stats")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
