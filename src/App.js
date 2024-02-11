import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Exp from './components/Experience/Exp.jsx';
import Projectss from './components/Projects/Projects.jsx';
import {Contact} from './components/contact/Contact.jsx';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Exp/>
      <Projectss/>
      <Contact/>
    </div>
  );
}

export default App;
