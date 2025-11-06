import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyLove from './components/WhyLove';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-[#0B0F19] font-inter">
      <Hero />
      <HowItWorks />
      <WhyLove />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
