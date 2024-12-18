
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Post1 from './components/Post1';
import Post2 from './components/Post2';
import Post3 from './components/Post3';

function App() {
  return (
    <Router basename="/myapp">
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/post1">Post 1</Link>
            </li>
            <li>
              <Link to="/post2">Post 2</Link>
            </li>
            <li>
              <Link to="/post3">Post 3</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/post1" element={<Post1 />} />
          <Route path="/post2" element={<Post2 />} />
          <Route path="/post3" element={<Post3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
