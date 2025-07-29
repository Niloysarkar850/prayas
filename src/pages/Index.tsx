import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoGallery from "@/components/PhotoGallery";
import Impact from "@/components/Impact";
import HowToHelp from "@/components/HowToHelp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PhotoGallery />
      <Impact />
      <HowToHelp />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
