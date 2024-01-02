import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import ProjectDisplay from "./pages/Projectdisplay";
import Rain from "./Components/Rain";
import MyStory from "./pages/MyStory";


function App() {
  return (
      <Router>
        <Navbar />
        <Rain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MyStory" element={<MyStory />} />
        </Routes>
        <Footer />
      </Router> 
  );
}

export default App;
