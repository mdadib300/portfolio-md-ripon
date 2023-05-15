import './App.css';
import About from './components/About/About';
import Achievement from './components/Achievement/Achievement';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Banner />
      <Skills />
      <Experience />
      <Achievement />
      <Footer />
    </div>
  );
}

export default App;
