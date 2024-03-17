import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Experience from './screens/Experience';
import './App.css';
import Inquiry from './screens/Inquiry';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/inquiry" element={<Inquiry/>} />
        </Routes>
    </Router>
  );
}

export default App;
