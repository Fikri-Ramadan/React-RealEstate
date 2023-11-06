import Companies from '../components/companies/Companies';
import Contact from '../components/contact/Contact';
import GetStarted from '../components/getStarted/GetStarted';
import Hero from '../components/hero/Hero';
import Residencies from '../components/residencies/Residencies';
import Value from '../components/value/Value';

const Website = () => {
  return (
    <div>
      <div className="container">
        <div className="white-blur" />
        <Hero />
      </div>
      <div className="wrapper">
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
      </div>
    </div>
  );
};
export default Website;
