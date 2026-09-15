import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Skills } from './sections/Skills/Skills';
import { Projects } from './sections/Projects/Projects';
import { Experience } from './sections/Experience/Experience';
import { Education } from './sections/Education/Education';
import { Services } from './sections/Services/Services';
import { Contact } from './sections/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App