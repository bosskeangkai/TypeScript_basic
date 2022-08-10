import React from 'react';
import './App.css';
import InputField from './components/InputField';

let name: string; //let name: any;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
// tuple
let role: [number,string];
// create object in typescript
// let person: Object =>not recomment
//' ?' in type said optional we can have it or not
// we can have 2 type in typescript that is union '|'
// type Person ={
//   name: string;
//   age?: number;
// };

// let person: Person={
//   name:"keangkai",
// };
age='boss '

// let printName: Function;
// function printName(name: string){
//   console.log(name);
// }
// printName("Boss")

// if we don't know or we want to return more than one type we using 'any'
// never, void, unknow
// let printName: (name: string) => never;

// Alias
// type X ={
//   a:string;
//   b:number;
// };
// type Y ={    //if we want to using the property in type x we need to use type Y = X&
//   c:string;
//   d:number;
// };

// // entending type with interface
// type Z ={
//   g:string;
//   h:number;
// };
// interface Person extends Z {
//   name:string;
//   age?:number;
// };

// function App() {
//   return (
//     <div className="App">
//       Hello World Boss
//     </div>
//   );
// }

const App: React.FC =() => { //FC:Function Components
  return(
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
};

export default App;