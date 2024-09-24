import './App.css';
import About from './components/About';
import Header from './components/Header'; 
import Hero from './components/Hero';
import Project from './components/Project';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
    return (
      <body className=''>
        <Header />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </body>
    );
}

export default App;
