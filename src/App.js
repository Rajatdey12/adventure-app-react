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
import SignUp from './components/sign-up-component/SignUp';
import ProtectedRoute from './components/common/ProtectedRoute';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path = "/" exact Component={ Home }/>
        <Route path = "/trailer" exact Component = { Trailer } />
        <Route path = "/services" exact element = {
          <ProtectedRoute>
           <Services /> 
           </ProtectedRoute>
           } />
        <Route path = "/products" exact element = {
          <ProtectedRoute>
           <Products /> 
           </ProtectedRoute>
           } />
        <Route path = "/sign-up" exact Component = { SignUp } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
