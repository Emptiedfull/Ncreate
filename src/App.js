
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Events';
import Showcase from './pages/Showcase';
import Timeline from './pages/Timeline';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (<>
    <Navbar></Navbar>
    <Router>
      
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/events' element={<Event />} />
          <Route path='/showcase' element={<Showcase />} />
          <Route path='/timeline' element={<Timeline />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
