import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
