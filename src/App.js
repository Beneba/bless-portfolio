import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import "./main"
import Footer from './component/Footer/Footer';
import Work from './component/Work/Work';

function App() {
  return (
    <div>
      <Header /> 
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
