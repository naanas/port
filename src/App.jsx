import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  NavBar,
  Home,
  About,
  Projects,
  Skills,
  Experience,
  Education,
  ContactMe,
  Footer,
  NotFound,
} from '../src/components/index';

import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Analytics />
      <ToastContainer theme="dark" />
      <Router>
        <div className="bg-cyberBlack min-h-screen text-textMain selection:bg-neonCyan selection:text-black">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
