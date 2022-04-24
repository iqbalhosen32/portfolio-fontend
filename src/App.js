import logo from './logo.svg';
import './App.scss';

import { About, Footer, Header, Testimonials, Work, Skills } from './Container';
import { Navbar } from './Components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
