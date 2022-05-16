import { Element } from 'react-scroll';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuWrapper from './components/MenuWrapper';
import Footer from './components/Footer';
import Copywright from './components/Copywright';
import Home from './components/Home';
import DetailContent from './components/DetailContent';
import Cart from './components/cart/Cart';
import GoToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
        <GoToTop />
        <Element name="home">
          <Navbar></Navbar>       
        </Element>
        <Routes>
          <Route path='/' element={<Home />}/>   
          <Route path='/orderPage' element={<DetailContent />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>

        <Element name="contact">
          <Footer></Footer>
        </Element>

        <Copywright></Copywright>
    </div>
  );
}

export default App;
