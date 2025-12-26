import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ label, value, subtext }) => (
  <div className="bg-zinc-900/50 p-8 border border-white/5 hover:border-prodigio-red/50 transition-colors group">
    <h3 className="text-4xl md:text-6xl font-display text-white mb-2 group-hover:text-prodigio-red transition-colors">
      {value}
    </h3>
    <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
      {label}
    </p>
    <p className="text-xs text-gray-600 font-mono">{subtext}</p>
  </div>
);

const Stats = () => {
  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <StatCard value="185K+" label="Ouvintes Mensais" subtext="Spotify" />
          <StatCard
            value="60M+"
            label="Streams Totais"
            subtext="Plataformas Digitais"
          />
          <StatCard value="1M+" label="Seguidores" subtext="Instagram" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
