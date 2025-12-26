import React from "react";

const collabs = [
  { name: "NGA", role: "Força Suprema" },
  { name: "Dji Tafinha", role: "Produtor / Artista" },
  { name: "Masta", role: "Força Suprema" },
  { name: "Don G", role: "Força Suprema" },
  { name: "Deezy", role: "Dope Muzik" },
  { name: "Monsta", role: "Dope Muzik" },
  { name: "Rihanna", role: "Dream Feature" }, // Artistic license/aspirational
];

const Collabs = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-display text-white text-center">
          COLABORAÇÕES & FAMÍLIA
        </h2>
      </div>

      {/* Infinite Marquee effect */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap pt-8 pb-12">
          {collabs.concat(collabs).map((collab, index) => (
            <span
              key={index}
              className="mx-8 md:mx-16 text-4xl md:text-7xl font-display text-transparent stroke-white hover:text-prodigio-red transition-colors cursor-default"
              style={{ WebkitTextStroke: "1px #333" }}
            >
              {collab.name}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap pt-8 pb-12">
          {collabs.concat(collabs).map((collab, index) => (
            <span
              key={index}
              className="mx-8 md:mx-16 text-4xl md:text-7xl font-display text-transparent stroke-white hover:text-prodigio-red transition-colors cursor-default"
              style={{ WebkitTextStroke: "1px #333" }}
            >
              {collab.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collabs;
