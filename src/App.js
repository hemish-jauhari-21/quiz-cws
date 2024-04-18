import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz1 from './components/Quiz1';
import Quiz2 from './components/Quiz2';
import Quiz3 from './components/Quiz3';
import Quiz4 from './components/Quiz4';

function App() {
  return (
    <>
    <h1 className='head'><center>Quizzes</center></h1>
    <Router>
      <nav>
        <ul className="navbar">
        
        <li><Link to="/Quiz1" className="nav-link">Cricket</Link></li>
        <li><Link to="/Quiz2" className="nav-link">Bollywood</Link></li>
        <li><Link to="/Quiz3" className="nav-link">Technical</Link></li>
        <li><Link to="/Quiz4" className="nav-link">Capital</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Quiz1" element={<Quiz1/>} />
        <Route path="/Quiz2" element={<Quiz2/>} />
        <Route path="/Quiz3" element={<Quiz3/>} />
        <Route path="/Quiz4" element={<Quiz4/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
