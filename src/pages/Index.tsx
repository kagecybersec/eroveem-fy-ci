import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Activities from '@/components/Activities';
import Directory from '@/components/Directory';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Directory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
