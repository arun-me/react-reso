import React from 'react';
import './App.css';
import AppName from './components/AppName/AppName';

const App=()=> {
  return (
    <div className="App">
    <AppName 
    title="React-Reso"
    slogan="All Things A Developer Needs"
    color="red"
    bg="black"
    border="red"/>
    </div>
  );
}
export default App;