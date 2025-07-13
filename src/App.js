import './App.css';
import Navbar from './components/navbar-component/Navbar';
import {
BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/pages/home-component/Home'
import Trailer from './components/pages/trailer-component/Trailer';
import Services from './components/services-component/Services';
import Products from './components/product-component/Products';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path = "/" exact Component={ Home }/>
        <Route path = "/trailer" exact Component = { Trailer } />
        <Route path = "/services" exact Component = { Services } />
        <Route path = "/products" exact Component = { Products } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
