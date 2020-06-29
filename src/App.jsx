import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './adboutpage/aboutpage';
import Home from './landingpage/homepage';
import Contact from './contactpage/contactpage';
import './navbar/navbar.css'
import './App.css';

const App = () => (
  <BrowserRouter>
    <div>
      <nav className="navbar ">
        <ul className="navbar-nav">
          <li><Link to={'/homepage'} className = "nav-link">Home</Link></li>
          <li><Link to={'/contactpage'} className="nav-link">Contact</Link></li>
          <li><Link to={'/aboutpage'} className="nav-link">About</Link></li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path='/homepage' component={Home} />
        <Route path='/contactpage' component={Contact} />
        <Route path='/aboutpage' component={About}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
