import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Discography from "./components/Discography";
import Videos from "./components/Videos";
import Gallery from "./components/Gallery";
import Shows from "./components/Shows";
import Collabs from "./components/Collabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-prodigio-red selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Discography />
      <Videos />
      <Gallery />
      <Shows />
      <Collabs />

      {/* Placeholders for other sections */}
      <div
        id="gallery"
        className="h-screen bg-zinc-900 flex items-center justify-center border-b border-white/5"
      >
        <h2 className="text-4xl text-white/20 font-display">
          Galeria (Em Breve)
        </h2>
      </div>

      <Footer />
    </div>
  );
}

export default App;
