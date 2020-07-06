import React from 'react';
import './App.css';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoItem from './pages/TodoItem';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="container-fluid">
          <div className="row">
              <div className="col-12 pl-0 pr-0">
                  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                      <Link className="navbar-brand text-light" to="/" >
                        Vanilla React
                      </Link>

                      <ul class="navbar-nav mr-auto">
                          <li class="nav-item">
                              <Link className="nav-link text-light" to="/tasks">
                                  Todo list
                              </Link>
                          </li>
                      </ul>
                  </nav>
              </div>
          </div>

          <div className="row justify-content-center mt-5">
              <div className="col-3">
                <Switch>
                  <Route exact path="/tasks/:id">
                    <TodoItem />
                  </Route>

                  <Route exact path="/tasks">
                    <TodoList />
                  </Route>

                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
          </div>
        </div>
      </HashRouter>      
    </div>
  );
}

export default App;
