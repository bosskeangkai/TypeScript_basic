import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC =() => { //FC:Function Components
  return(
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
};
// last time double check
export default App;