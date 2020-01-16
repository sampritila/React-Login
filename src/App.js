import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login/Login";
import Userdetails from "./Components/Userdetails/Userdetails";

function App() {
  return (
    <div className="App">
     <h1>Hello-App</h1>
     <Login/>
     <Userdetails/>
    </div>
  );
}

export default App;
