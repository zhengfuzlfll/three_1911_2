import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

/* 引入的文件需要放到文件的最前面 */
/*引入 default  属性*/
import TodoList from "./components/TodoList.js";
// import TodoForm from "./components/TodoForm.js";
/* 引入 TodoList属性 */
// import *  as all from './components/TodoList.js'
// console.log('TodoList:' ,TodoList)
// console.log("all:",all)

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    // this.state = {};
  }
  render() {
    return (
     <div>
        {/* <img src="./img/laoxie.jpg" alt=""/> */}
      <TodoList></TodoList>
        
      </div>
    );
  }
}

export default App;
