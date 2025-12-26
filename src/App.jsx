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
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-prodigio-red selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Collabs />
      <About />
      <Timeline />
      <Discography />
      <Videos />
      <Gallery />
      <Shows />

      <Footer />
    </div>
  );
}

export default App;
