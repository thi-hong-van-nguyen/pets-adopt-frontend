import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Dogs from '../src/components/Dogs';
import Cats from './components/Cats';
import Others from './components/Others';
import Procedures from './components/Procedures';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Home from './components/Home';
import Footer from './components/Footer';
import Details from './components/Details';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path='/pets/:id'>
          <Details />
        </Route>

        <Route path='/dogs'>
          <Dogs />
        </Route>

        <Route path='/cats'>
          <Cats />
        </Route>

        <Route path='/others'>
          <Others />
        </Route>

        <Route path='/how-it-works'>
          <Procedures />
        </Route>


        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/logout'>
          <Logout />
        </Route>


        <Route path='/signup'>
          <Signup />
        </Route>


        <Route path='/'>
          <Home />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
