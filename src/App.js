import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import About from './pages/About/About';
import LifePage from './pages/treeForLife/LifePage';
import Works from './pages/Works/Works';
import Faq from './pages/FAQ/Faq';
import Facts from './pages/Fact/Facts';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Form from './layout/form/Form';

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route exact path='/'  element={<Home/>}/>
    <Route exact path='/about'  element={<About/>}/>
    <Route exact path='/treeForLife' element={<LifePage/>}/>
    <Route exact path='/Works' element={<Works/>}/>
    <Route exact path='/FAQ' element= {<Faq/>}/>
    <Route exact path='/Fact' element={<Facts/>}/>
    <Route exact path='/Contact' element={<Contact/>}/>
    <Route exact path='/Shop' element={<Shop/>}/>
    <Route exact path='/Cart' element={<Cart/>}/>
    <Route exact path='/Individual' element={<Form/>}/>

  </Routes>
</BrowserRouter>
  );
}

export default App;
