//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import {SecondsCounter} from "./counter.jsx";
//render your react application
let segundos = 0 ;
setInterval(()=>{
   let segString = segundos.toString()
   let unidad = segString[segString.length - 1]
   let decena = segString[segString.length - 2]
   let centena = segString[segString.length - 3]
   let miles = segString[segString.length - 4]
    segundos++
    ReactDOM.render(<SecondsCounter unidad={unidad} decena={decena} centena={centena} miles={miles}/>, document.querySelector("#app"));
},1000)

