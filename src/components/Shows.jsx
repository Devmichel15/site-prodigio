import React from "react";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const shows = [
  {
    date: "15 NOV",
    city: "Luanda, AO",
    venue: "Cine Atlântico",
    status: "Sold Out",
  },
  {
    date: "02 DEZ",
    city: "Lisboa, PT",
    venue: "Coliseu dos Recreios",
    status: "Bilhetes Disponíveis",
    link: "#",
  },
  {
    date: "20 DEZ",
    city: "Porto, PT",
    venue: "Hard Club",
    status: "Bilhetes Disponíveis",
    link: "#",
  },
  {
    date: "31 DEZ",
    city: "Benguela, AO",
    venue: "Praia Morena",
    status: "Em Breve",
  },
];

const Shows = () => {
  return (
    <section id="shows" className="py-24 bg-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display text-white mb-16 text-center">
          AGENDA DE SHOWS
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {shows.map((show, index) => (
            <div
              key={index}
              className="group bg-black border border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between hover:border-prodigio-red transition-all cursor-default"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 flex-1 w-full md:w-auto text-center md:text-left">
                <div className="text-prodigio-red font-display text-3xl md:text-4xl w-24">
                  {show.date.split(" ")[0]}
                  <span className="block text-sm text-gray-400 font-sans tracking-widest">
                    {show.date.split(" ")[1]}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl text-white font-bold uppercase tracking-wide mb-1">
                    {show.venue}
                  </h3>
                  <p className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm">
                    <MapPin size={14} /> {show.city}
                  </p>
                </div>
              </div>

              <div className="mt-6 md:mt-0">
                {show.status === "Sold Out" ? (
                  <span className="text-red-500 font-bold uppercase tracking-widest border border-red-500/30 px-6 py-3 block text-center">
                    Esgotado
                  </span>
                ) : show.status === "Em Breve" ? (
                  <span className="text-gray-500 font-bold uppercase tracking-widest px-6 py-3 block text-center">
                    Em Breve
                  </span>
                ) : (
                  <a
                    href={show.link}
                    className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-prodigio-red hover:text-white transition-all flex items-center gap-2 group-hover:scale-105"
                  >
                    Comprar <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shows;
