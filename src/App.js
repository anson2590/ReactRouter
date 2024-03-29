import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/Home' component={Home} />
        <Route path='/Contact' component={Contact} />
        <Route path='/About' component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
