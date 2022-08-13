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
// test updating to github for check update or not
export default App;