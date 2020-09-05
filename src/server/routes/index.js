import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import TodoList from '../../views/todolist';
import UserTodoList from '../../views/usertodolist'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <TodoList />
                </Route>

                <Route path="/users/:userId">
                    <UserTodoList />
                </Route>
            </Switch>
        </Router>
    );
  }
  
export default Routes;
