import React from "react";
import { motion } from "framer-motion";

const images = [
  {
    src: "/assets/images/gallery_post7.jpg",
    alt: "Prodígio em show Post 7",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    src: "/assets/images/gallery_palavras.jpg",
    alt: "Prodígio em palco Palavras com banda ao vivo",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "/assets/images/gallery_close.jpg",
    alt: "Close artístico em palco",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "/assets/images/gallery_historical.jpg",
    alt: "Foto de apresentação ao vivo em eventos históricos",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    src: "/assets/images/gallery_nga.jpg",
    alt: "Foto com NGA",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="min-h-screen bg-zinc-950 text-white py-24 relative"
    >
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-display text-white mb-6 uppercase tracking-tight">
            Galeria <span className="text-prodigio-red">Live</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Momentos capturados em palco. Energia, entrega e história.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden ${img.span}`}
            >
              <div className="absolute inset-0 bg-prodigio-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 mix-blend-multiply"></div>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity z-20 translate-y-4 group-hover:translate-y-0 duration-500">
                <p className="text-white font-bold text-sm uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm inline-block">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1 row-span-1 bg-zinc-900 border border-white/5 flex flex-col items-center justify-center text-center p-6 group hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <h3 className="text-2xl font-display text-white/50 group-hover:text-white transition-colors">
              + NO INSTAGRAM
            </h3>
            <a
              href="https://instagram.com/pro2da"
              target="_blank"
              rel="noopener noreferrer"
              className="text-prodigio-red mt-2 font-bold hover:underline"
            >
              @pro2da
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
