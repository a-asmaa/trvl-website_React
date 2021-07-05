import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Home from './components/pages/Home';
import Products from './components/pages/products';
import Servecis from './components/pages/services';
import Signup from './components/pages/signup';

function App() {
  return (
    <div className="App">
      <Router >
          <NavBar />
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/trvl-website_React"  component={Home}></Route>
          <Route path="/signup"  component={Signup}></Route>
          <Route path="/products"  component={Products}></Route>
          <Route path="/services"  component={Servecis}></Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
