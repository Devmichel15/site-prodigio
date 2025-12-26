import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Placeholder or Gradient */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225255756-d6216ae3b624?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay"></div>

      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/60"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-prodigio-red tracking-[0.5em] text-sm md:text-lg mb-4 uppercase font-bold">
            Rapper • Compositor • Visionário
          </h2>
          <h1 className="text-6xl md:text-9xl font-display text-white mb-6 tracking-tighter shadow-black drop-shadow-lg">
            PRODÍGIO
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light">
            A voz da Força Suprema. Estética urbana, lírica afiada e impacto
            visual.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-prodigio-red hover:bg-red-900 text-white px-8 py-4 rounded-none uppercase tracking-widest font-bold transition-all flex items-center gap-2 group">
              <Play
                size={20}
                className="fill-current group-hover:scale-110 transition-transform"
              />
              Ouvir Agora
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-none uppercase tracking-widest font-bold transition-all">
              Ver Videoclipes
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-px h-12 bg-linear-to-b from-transparent via-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
