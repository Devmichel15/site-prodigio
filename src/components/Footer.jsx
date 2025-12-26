import React from "react";
import { Instagram, Youtube, Music, Info } from "lucide-react"; // Using icons as placeholders for social media

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display text-white mb-6">PRODÍGIO</h2>
            <p className="text-gray-400 max-w-md">
              Fica por dentro de todos os lançamentos, shows e novidades
              exclusivas. Não percas nada da trajetória.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-prodigio-red hover:border-prodigio-red transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-prodigio-red hover:border-prodigio-red transition-all"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-prodigio-red hover:border-prodigio-red transition-all"
              >
                <Music size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">
              Newsletter
            </h4>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Seu email"
                className="bg-transparent border border-white/20 text-white px-4 py-3 focus:border-prodigio-red outline-none"
              />
              <button className="bg-white text-black font-bold uppercase tracking-widest py-3 hover:bg-gray-200 transition-colors">
                Subscrever
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Prodígio. Todos os direitos
            reservados.
          </p>
          <p>Designed with Art & Soul.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
