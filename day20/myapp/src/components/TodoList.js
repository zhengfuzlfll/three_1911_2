/* 必须 */
import React, {Component} from 'react';
import TodoForm from './TodoForm.js';
import TodoContent from './TodoContent.js'
// function TodoList(){     return (         <div> <TodoForm></TodoForm>
// <TodoContent></TodoContent>         </div>   ) }
/* =====> */
/* 状态组件=>类组件 */
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      datalist: [
        {
          id: Date.now(),
          title: "明年实现月薪过万",
          done: false,
          selected: false
        }, {
          id: Date.now() + 10,
          title: "男同学变成高富帅，迎娶白富美",
          done: false,
          selected: false
        }, {
          id: Date.now() + 20,
          title: "女同学变成白富美，迎娶高富帅",
          done: false,
          selected: false
        }
      ]
    }
  }


/* 谁的数据谁修改 */
/* 自定义方法 */
/* --------在这里写的方法，会自动成为原型的方法 */
addItem(){

}

  render() {
      console.log(this)
      /*render中的this 指向实例 */
    return (
      <div>
        <TodoForm></TodoForm>
        <TodoContent datalist={this.state.datalist}></TodoContent>

      </div>

    )
  }
}

/* 往模块对象中添加TodoList属性 */
// export function TodoList(){     return (         <div>
//             TodoList         </div>     ) }

/* 往模块对象中添加default属性 */
export default TodoList;