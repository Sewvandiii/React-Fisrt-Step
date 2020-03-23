import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello' 
import Message from './Components/Message'
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App"> 

    <Message />
    <Counter />
    {/*<Greet name = "Bruno" surname = "Charles">
    <p>This is childern props</p>  </Greet> 

    <Greet name = "Alice" surname = "Lavender">
    <button>Action</button></Greet>

    <Greet name = "Hannah" surname = "Rosewood" />

    <Welcome name = "Bruno" surname = "Charles">
    </Welcome>

    <Welcome name = "Alice" surname = "Lavender"></Welcome>

    <Welcome name = "Bruno" surname = "Charles"  ></Welcome>
    <Hello />*/}
    </div>
  );
}

export default App;
//include greet component in App component
//can use any name of greet in importing 
//im going to change the greet into MyComponent