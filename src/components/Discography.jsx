import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, Award } from "lucide-react";

const albums = [
  {
    title: "Prodígios",
    year: "2015",
    image: "/assets/images/album_prodigios.jpg",
    link: "#",
  },
  {
    title: "King2DA",
    year: "2018",
    image: "/assets/images/album_king2da.jpg",
    link: "#",
  },
  {
    title: "Castelos",
    year: "2019",
    image: "/assets/images/album_castelos.jpg",
    link: "#",
  },
  {
    title: "All Star",
    year: "2020",
    image: "/assets/images/album_allstar.jpg",
    link: "#",
  },
];

const promoItems = [
  {
    title: "Nomeação Angola VMAs 2020",
    type: "Poster Oficial",
    image: "/assets/images/promo_vmas.png",
  },
  {
    title: "Prodígios - O Álbum",
    type: "Capa Oficial",
    image: "/assets/images/album_prodigios.jpg",
  },
];

const Discography = () => {
  return (
    <section
      id="discography"
      className="py-24 bg-black relative border-t border-white/5"
    >
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

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
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

              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
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

        {/* Promo / Press Section */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-white/10 flex-1"></div>
            <h3 className="text-2xl font-display text-white/50 uppercase">
              Promo & Press
            </h3>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {promoItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="relative w-full md:w-96 group"
              >
                <div className="aspect-3/4 overflow-hidden border border-white/10 bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">
                    {item.title}
                  </h4>
                  <span className="text-prodigio-red text-xs uppercase font-bold">
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
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
