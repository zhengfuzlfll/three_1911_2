import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import * as serviceWorker from "./serviceWorker";

let className = "Prettier-Code formatter  JSX格式化";
// ReactDOM.render(<App />, document.getElementById('root'));

function handleClick() {
  console.log("click----");
}

let mystyle = { width: 200 };
ReactDOM.render(
  /* 顶层标签，不占用实际标签 */
  <React-Fragment>
  <App />
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
  </React-Fragment>,
  document.getElementById("root")

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
