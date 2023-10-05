import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div>
      <div className="container">
        <div className='white-blur' />
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
