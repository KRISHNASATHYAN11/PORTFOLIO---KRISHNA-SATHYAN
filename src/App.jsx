import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="App">
      {/* --- Background Blobs (Fixed) --- */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* --- Navbar --- */}
      <Navbar />

      <main style={{ width: '100%' }}>
        {/* Hero: Transparent background to show off the blobs */}
        <Hero />

        {/* About: White Background for clean reading */}
        <section style={{ background: "#ffffff", position: "relative", zIndex: 2 }}>
          <About />
        </section>

        {/* Experience: Light Pink Background for contrast */}
        <section style={{ background: "#fff0f3", position: "relative", zIndex: 2 }}>
          <Experience />
        </section>

        {/* Projects: White Background */}
        <section style={{ background: "#ffffff", position: "relative", zIndex: 2 }}>
          <Projects />
        </section>

        {/* Contact: Light Pink Background */}
        <section style={{ background: "#fff0f3", position: "relative", zIndex: 2 }}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;