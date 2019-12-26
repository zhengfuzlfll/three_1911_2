import React from 'react';
// import logo from './logo.svg';
import './App.css';

// let className = "Prettier-Code formatter  JSX格式化";
// // ReactDOM.render(<App />, document.getElementById('root'));

// function handleClick() {
//   console.log("click----");
// }

// let mystyle = { width: 200 };
// /* 
//   定义的变量在return外写-----------1
//  */


/* ---------------------------函数组件---------------------------- */
function App() {
  let className = "Prettier-Code formatter  JSX格式化";
  // ReactDOM.render(<App />, document.getElementById('root'));
  
  function handleClick() {
    console.log("click----");
  }
  
  let mystyle = { width: 200 };
  /* 
    定义的变量在return外写--------------2
   */
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

 /* 顶层标签，不占用节点空间 */
<React.Fragment>
  <div id="app">
    <div id="container">
      {/* 注释  class为关键字，要用className代替 for=>htmlFor*/}

      <h1 className="myreact">React</h1>
      <h2 onClick={handleClick}>{className}</h2>
      <label htmlFor="username">用户名</label>
      {/* autoComplete="off" 自动清除输入框的历史记录  默认为 autoComplete="on"*/}
      <input type="text" id="username" autoComplete="off"></input>
      <input type="text" />
      {/*  <input /> */}
      {/* img  图片放在public里面 */}
      {/* style 里只能写对象  最外层{}表示为js代码，里层的{}表示对象 */}
      <img src="./img/g3.jpg" style={{ width: 100 }} />
      <img src="./img/laoxie.jpg" style={mystyle} />

      {
        //<img src="./img/laoxie.jpg" style={mystyle} />
      }
    </div>
  </div>
  <div>jingjing</div>
  </React.Fragment>
  );
}

export default App;
