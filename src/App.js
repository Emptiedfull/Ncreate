import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Contact from "./pages/Contact";
import Event from "./pages/Events";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";
import Test from "./pages/test";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Event />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
