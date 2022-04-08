import Profile from './Profile/Profile';
import './App.css';
import React from 'react';


function App() {

  return (
    <div className="App">
    <span>
    <Profile fullName="Ashraf Ben Khemis" bio="new" profession="Engineer" src="./Ashraf.png"/>
    </span>  
    </div>
  );
}

export default App;
