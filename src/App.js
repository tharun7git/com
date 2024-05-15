// Filename - App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chats from "./Components/Chats"; // Corrected import to match the new component name
import About from "./Components/about";
import Contact from "./Components/contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Chats />}></Route> {/* Updated Route */}
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <footer className="App-footer">
            {/* New footer section */}
            <ul className="App-header">
              <li>
                <Link to="/">Chats</Link>
              </li>
              <li>
                <Link to="/about">Updates</Link>
              </li>
              <li>
                <Link to="/contact">Calls</Link>
              </li>
            </ul>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
