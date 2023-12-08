import React from 'react'; // dunno if needed
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';

// export default function App()?
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path ="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>

          <Routes>
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
