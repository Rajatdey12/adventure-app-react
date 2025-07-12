import './App.css';
import Navbar from './components/navbar-component/Navbar';
import {
BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/pages/home-component/Home'
import Trailer from './components/pages/trailer-component/Trailer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" exact Component={ Home }/>
        <Route path = "/trailer" exact Component = { Trailer } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
