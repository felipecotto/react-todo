import React from 'react';
import GlobalStyles from "./styles/global"; 
import Routes from './server/routes/index'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <GlobalStyles />
    <Routes/>
    </>
  );
}

export default App;
