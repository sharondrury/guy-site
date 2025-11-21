import './App.css'

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import Nav from './components/nav';
import Hero from './components/hero';
import Experience from './components/experience';

function App() {

  return (
    <>
      <section className='nav-bar-section'>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Experience />
      </section>
    </>
  );
}

export default App
