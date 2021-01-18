import React from 'react';
import Home from './pages/Home'
import Bread from './pages/Bread'
import Coffee from './pages/Coffee'
import Cart from './pages/Cart'
import Header from './component/Header'
import Footer from './component/Footer'
import Product from './component/Product'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bread">
          <Bread />
        </Route>
        <Route path="/coffee">
          <Coffee />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/bread/:breadID">
          <Product />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
