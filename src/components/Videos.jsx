import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Relationship Goals",
    image:
      "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Minha Dor",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Propaganda",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
    link: "#",
  },
];

const Videos = () => {
  return (
    <section id="videos" className="py-24 bg-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-2">
              VIDEOCLIPES
            </h2>
            <div className="h-1 w-20 bg-prodigio-red"></div>
          </div>
          <button className="hidden md:block text-white border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all uppercase text-sm tracking-widest">
            Ver Canal Oficial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video bg-black cursor-pointer overflow-hidden border border-white/10"
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-prodigio-red group-hover:border-prodigio-red transition-all duration-300">
                  <Play
                    className="fill-white text-white translate-x-1"
                    size={24}
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black to-transparent">
                <h3 className="text-white font-display text-xl uppercase tracking-wider">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="text-white border border-white/20 px-8 py-3 hover:bg-white hover:text-black transition-all uppercase text-sm tracking-widest">
            Ver Canal Oficial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Videos;
