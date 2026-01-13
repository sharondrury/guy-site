import './index.css'

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// import Nav from './components/nav';
import Hero from './components/hero';
import Experience from './components/experience';
import TechStack from './components/tech-stack';
import Footer from './components/footer';
import DeepDive from './components/deepDive';
import FloatingMenu from './components/floatingMenu';

function App() {

  return (
    <>
      {/* <section className='nav-bar-section'>
        <Nav />
      </section> */}
      <section>
        <FloatingMenu />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <TechStack />
      </section>
      <section>
        <DeepDive />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App
