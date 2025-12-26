import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-zinc-900 border-b border-white/5 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-prodigio-red/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-prodigio-brown/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              {/* Placeholder Image */}
              <img
                src="/assets/images/about_art.jpg"
                alt="Prodígio Art"
                className="w-full h-full object-cover object-center shadow-2xl"
              />

              {/* Overlay Frame */}
              <div className="absolute inset-4 border-2 border-prodigio-red/50 z-10 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-display text-white tracking-tight">
              KING 2 DA WORLD
            </h2>

            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
              <p>
                <span className="text-prodigio-red font-bold">Prodígio</span>{" "}
                não é apenas um nome no rap angolano, é uma instituição. Membro
                fundamental da{" "}
                <strong className="text-white">Força Suprema</strong>, ele
                redefiniu o que significa ser lírico e comercial
                simultaneamente.
              </p>
              <p>
                De mixtape em mixtape, a sua trajetória foi construída com
                consistência inabalável. Projetos como <em>"Prodígios"</em> e{" "}
                <em>"Castelos"</em> solidificaram o seu lugar no trono, mas foi
                com <em>"King2DA"</em> que ele mostrou a sua versatilidade
                global.
              </p>
              <p>
                A sua arte reflete a realidade das ruas, a ambição da juventude
                e a complexidade da vida moderna, tudo entregue com um flow
                inconfundível e uma estética visual que desafia o status quo.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex gap-8">
              <div>
                <span className="block text-2xl font-display text-white">
                  10+
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Álbuns/Mixtapes
                </span>
              </div>
              <div>
                <span className="block text-2xl font-display text-white">
                  FS
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Força Suprema
                </span>
              </div>
              <div>
                <span className="block text-2xl font-display text-white">
                  DOPE
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Muzik
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
