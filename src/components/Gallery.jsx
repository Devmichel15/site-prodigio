import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593697972466-9e7943444498?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1493225255756-d6216ae3b624?q=80&w=2070&auto=format&fit=crop",
];

const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section
      ref={targetRef}
      id="gallery"
      className="h-[300vh] bg-black relative"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-24">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-120 md:w-160 h-[50vh] md:h-[60vh] shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 left-0 text-white font-display text-4xl opacity-50">
                0{index + 1}
              </div>
            </div>
          ))}
          <div className="w-120 md:w-160 h-[50vh] md:h-[60vh] shrink-0 flex items-center justify-center border border-white/10">
            <h3 className="text-4xl font-display text-white text-center">
              MAIS NO INSTAGRAM
              <br />
              <a
                href="#"
                className="text-prodigio-red text-xl tracking-widest hover:underline mt-4 block"
              >
                @PRODIGIOFS
              </a>
            </h3>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-10 left-10 md:left-24 z-10">
        <h2 className="text-4xl md:text-6xl font-display text-white mix-blend-difference">
          GALERIA VISUAL
        </h2>
      </div>
    </section>
  );
};

export default Gallery;
