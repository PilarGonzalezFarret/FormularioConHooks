import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

function App() {
  const [ state, setState ] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    onfirmPassword:""
  }); 

  return (
    <div className="App">
      <Form input = { state } setInput = { setState } />
      <Result data = { state } />
    </div>
  );
}

export default App;
