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
// switch to branch
// try to update to git
// test update another branch .
export default App;