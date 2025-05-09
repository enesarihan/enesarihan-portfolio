import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-num-5">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
