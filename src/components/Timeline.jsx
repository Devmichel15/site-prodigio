import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    year: "2015",
    title: "O Início da Era Prodígios",
    description:
      "Lançamento do álbum que marcou a mudança na indústria. O impacto foi imediato e duradouro.",
    image: "/assets/images/timeline_promo.jpg",
    location: "Angola",
  },
  {
    year: "2023",
    title: "Consagração no Cine Atlântico",
    description:
      "Show histórico esgotado, reafirmando o estatuto de lenda viva do Rap Lusófono.",
    image: "/assets/images/timeline_cine.jpg",
    location: "Luanda, Cine Atlântico",
  },
];

const Timeline = () => {
  return (
    <section
      id="timeline"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display text-white mb-4 uppercase">
            Trajetória
          </h2>
          <p className="text-gray-400">Marcos históricos e evolução.</p>
        </div>

        <div className="flex flex-col gap-24">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-video md:aspect-square overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-prodigio-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-color"></div>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white/20">
                    {event.year}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div
                className={`w-full md:w-1/2 text-center ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
              >
                <h3 className="text-2xl md:text-4xl font-display text-white mb-4 uppercase">
                  {event.title}
                </h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                  {event.description}
                </p>
                <div
                  className={`flex items-center gap-2 text-prodigio-red font-bold uppercase tracking-widest text-xs justify-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <span className="w-8 h-px bg-prodigio-red"></span>
                  {event.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
