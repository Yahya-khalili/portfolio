
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Work from './components/work/Work';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Certif from './components/Certif/Certif';

function App() {
  return (
    < >
      <Header></Header>
      <main className='main'>
        <Home></Home>
        <About/>
        <Skills></Skills>
        <Work/>
        <Certif/>
        <Contact/> 
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
