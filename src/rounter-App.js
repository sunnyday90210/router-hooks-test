import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: '/about',
                  state: {
                    from: 'root'
                  }
                }}>
                About
              </Link>
            </li>
            <li>
              <Link to='/user/John/Johnson'>User</Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:firstname/:lastname'
                component={Users}
              />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
