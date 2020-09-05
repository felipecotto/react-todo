import React from 'react';
import TodoList from './views/todolist/index';
import GlobalStyles from "./styles/global"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <GlobalStyles />
    <TodoList/>
    </>
  );
}

export default App;
