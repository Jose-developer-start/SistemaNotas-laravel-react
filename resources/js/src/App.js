import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Header from './components/Header';
import Home from './components/pages/Home';
import Rols from './components/pages/Rols';
function App() {
  return (
    <>
    <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="/usuarios" element={ <Rols /> } />
    </Routes>   
    </>
  );
}

export default App;

if(document.getElementById('app')){
    ReactDOM.render(
        <BrowserRouter>
            <App /> 
        </BrowserRouter>,
        document.getElementById('app')
    )
}

