import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const albums = [
  {
    title: "Prodigios",
    year: "2015",
    image:
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "King2DA",
    year: "2018",
    image:
      "https://images.unsplash.com/photo-1493225255756-d6216ae3b624?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Castelos",
    year: "2019",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "All Star",
    year: "2020",
    image:
      "https://images.unsplash.com/photo-1514525253440-b393452e2729?q=80&w=1942&auto=format&fit=crop",
    link: "#",
  },
];

const Discography = () => {
  return (
    <section id="discography" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white mb-4">
            DISCOGRAFIA
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A evolução sonora. Do clássico ao experimental, cada projeto conta
            um capítulo da história.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square bg-zinc-900 cursor-pointer overflow-hidden border border-white/5"
            >
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                <h3 className="text-2xl font-display text-white uppercase mb-1">
                  {album.title}
                </h3>
                <p className="text-prodigio-red font-bold text-sm mb-4">
                  {album.year}
                </p>
                <button className="flex items-center gap-2 text-white border border-white px-6 py-2 hover:bg-white hover:text-black transition-all uppercase text-xs tracking-widest font-bold">
                  <PlayCircle size={16} /> Ouvir
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block text-white border-b border-prodigio-red pb-1 hover:text-prodigio-red transition-colors uppercase tracking-widest text-sm"
          >
            Ver Discografia Completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default Discography;
