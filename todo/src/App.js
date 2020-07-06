import React from 'react';
import './App.css';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoItem from './pages/TodoItem';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <nav>
          <ul>
            <li>
              <Link to="/tasks" >
                tasks
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/tasks/:id">
            <TodoItem />
          </Route>

          <Route exact path="/tasks">
            <TodoList />
          </Route>
        </Switch>
      </HashRouter>  
    </div>
  );
}

export default App;
