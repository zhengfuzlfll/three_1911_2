import React, {
    Component
} from 'react';

import TodoList from './components/TodoList.js';

/* 声明周期函数 */
import Lifecycle from './components/Lifecycle.js'

class App extends Component {
    render(){
        return (
   
            // <TodoList/>
            <Lifecycle></Lifecycle>
        
        )
    }
}

export default App;