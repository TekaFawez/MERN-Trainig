import { React } from "react"
import DemoEvent from "./components/demoEvent";
import Personne from "./components/Personne";
import PersonneFun from "./components/PersonneFun";
import TestFunctio from "./components/test";
import TestClass from "./components/testClass";

// const msg = <h1>Bienvenue à notre formation !</h1>
// const name = " Anis ASSAS"
// // const photo = <img src='./images/logo512.png' alt="MaPhoto" width="50" lenght="50"></img>
// const todo = (
//   <ol>
//     <li>Working</li>
//     <li>Go Shopping</li>
//     <li>Dinner</li>
//   </ol>
// );

// let x="Bonjour" 
// var y="tout"
// const z="le monde !"
// const expression = <p> 1 + 1 = { 1 + 1 } </p>

// const user = {
//   prenom: 'Anis',
//   nom: 'Assas'
// };
// function formatName1(u){
//   return u.prenom + '--' + u.nom;
// }

// const formatName2 = function (u){
//   return u.prenom + '--' + u.nom;
// }

// const formatName=(u)=>{
//   return u.prenom + '--' + u.nom;
//   }

// const myStyle = {
//     fontSize: 100,
//     color: '#FF0000'
// }

// const disBonjour=(u) =>{
//   let verif = (u.prenom === 'Anis') ? formatName(u) : 'inconnu';
//   return <h1>Bonjour {verif}</h1>
  /*if (u.prenom==='Anis') {
  return <h1>Bonjour, {formatName(u)} !</h1>; }
  return <h1>Bonjour Inconnu.</h1>;*/

  

  // const numbers = [7, 12, 25, 4, 5];
  // const pairCarre = numbers.filter( (v) => v % 2 ===0).map((r,i) => <li key={i}>{r*r}</li>)
  // const max = numbers.reduce((a,b)=> Math.max(a,b))
  // const max2 = numbers.reduce((a,b)=> a>b ? a : b)
  // const numbersList = numbers.map((e, i)=> <li key={i}>{e}</li>)
  // const doubled = numbers.map((e,i) => <li key={i}>{e * 2}</li>);


function App() {
  return (
    <div>
      {/* <TestFunctio></TestFunctio>
      <TestClass></TestClass>
      <Personne   nom="Teka"></Personne>
      <PersonneFun prenom="Salah"  nom="Sleh"/> */}
      <DemoEvent></DemoEvent>
      </div>
  );
}

export default App;
