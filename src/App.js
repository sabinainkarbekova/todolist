import React from 'react';
import TodoList from './components/TodoList';
import Name from './components/Apiname';
import './App.css'; 


function App() {
  return (
    <div className="App">
      <TodoList />
      <Name />  
    </div>
  ); 
}

export default App;