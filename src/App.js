import React from 'react';
import './App.css';
import AppName from './components/AppName/AppName';

const App=()=> {
  return (
    <div className="App">
    <AppName 
    title="LISO KNITS"
    slogan="Premium Quality Nothing Else"
    color="red"
    bg="black"
    border="red"/>
    </div>
  );
}
export default App;