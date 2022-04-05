import Profile from './Profile/Profile';
import './App.css';
import React from 'react';

function App() {

  return (
    <div className="App">
    <span>
    <Profile fullName="Ashraf Ben Khemis" bio="Student" profession="Engineer"/>
    </span>  
    </div>
  );
}

export default App;
