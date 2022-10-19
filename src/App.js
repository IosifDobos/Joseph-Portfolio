import './App.css';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// components
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
