import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-white font-sans antialiased selection:bg-[#FF5533] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800/40">
        © {new Date().getFullYear()} Jensen. Tous droits réservés.
      </footer>
    </div>
  );
}
