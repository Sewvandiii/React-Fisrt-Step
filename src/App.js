import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello' 
import Message from './Components/Message'
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreetings from './Components/UserGreetings';
import NameList from './Components/NameList';
import Style from './Components/Style';
import Inline from './Components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'


function App() {
  return (
    <div className="App"> 
    <h1 className = 'error'>Error</h1>
    <h1 className = {styles.success}>Success</h1> 
    {/* <Inline /> */}
    {/* <NameList /> */}
    {/* <Style primary ={true} /> */}
    {/* <UserGreetings /> */}
    {/* <ParentComponent /> */}
    {/* <FunctionClick />
    <ClassClick /> */}
    {/* <EventBind /> */}
    {/* <Message />
    <Counter /> */}
    {/* <Greet name = "Bruno" surname = "Charles">
    <p>This is childern props</p>  </Greet> 

    <Greet name = "Alice" surname = "Lavender">
    <button>Action</button></Greet>

    <Greet name = "Hannah" surname = "Rosewood" />

    <Welcome name = "Bruno" surname = "Charles">
    </Welcome>

    <Welcome name = "Alice" surname = "Lavender"></Welcome>

    <Welcome name = "Bruno" surname = "Charles"  ></Welcome> */}
    {/* <Hello /> */}
    </div>
  );
}

export default App;
//include greet component in App component
//can use any name of greet in importing 
//im going to change the greet into MyComponent