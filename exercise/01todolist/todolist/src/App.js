import React,{Component} from 'react';

import TodoList from './components/TodoList.js';
// import Lifecycle from './components/Lifecycle';



class App extends Component {
  constructor() {
    super();
    // this.state = {};
  }
  render() {
    return (
      <TodoList></TodoList>

    );
  }
}

export default App;