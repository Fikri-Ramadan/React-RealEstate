import './App.css';
import Companies from './components/companies/Companies';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import GetStarted from './components/getStarted/GetStarted';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Residencies from './components/residencies/Residencies';
import Value from './components/value/Value';

function App() {
  return (
    <div>
      <div className="container">
        <div className="white-blur" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
