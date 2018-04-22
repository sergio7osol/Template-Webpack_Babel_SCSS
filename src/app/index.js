// import React, { Component } from 'react';
// import { render } from 'react-dom';
import './scss/main.scss';

const companiesArr = ["Otkrytie", "Alfabank", "Elaborated Networks"]; 
const arrStr = companiesArr.reduce((accu, v) => accu += " " + v);
const h2_el = document.createElement("h2");
h2_el.style.marginTop = "55px";
h2_el.textContent = "A newly created H2 Element";
document.querySelector(".container").appendChild(h2_el);
// console.log("h2_el: ", h2_el);

console.log(
    ((str) => {
        return str + " | Addition.";
    })(arrStr)
);




// const employeeReducer = (state, action) => {

// };


// import React from "react";
// import {render} from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));