import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-deep-black min-h-screen text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}

export default App
