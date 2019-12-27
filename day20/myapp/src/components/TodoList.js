/* 必须 */
import React, {
  Component
} from 'react';
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
      checkedAll: false,
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
      }]
    };
    /* 在初始化时改变this指向 */
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.compeletedItem = this.compeletedItem.bind(this);
    this.selectedItem = this.selectedItem.bind(this);
    this.selectedAll = this.selectedAll.bind(this);
    /* shift+alt+下键 */
    /* shift+ctrl +L 选中多个 */
  }


  /* 谁的数据谁修改 */
  /* 自定义方法 --------在React自定义函数中没有this*/
  /* --------在这里写的方法，会自动成为原型的方法 */
  /* 添加数据-------------------- */
  addItem(title) {
    // console.log("title=>",title)
    //Vue
    // this.state.datalist.push();

    /* React 覆盖  this.setState()*/
    // if(title){
      let data = {
      id: Date.now(),
      title,
      done: false,
      selected: false
    }
    let datalist = this.state.datalist
    datalist.unshift(data);
    this.setState({
      datalist
    })
  // }
  // else{
  //   alert("请输入内容")
  // }
   
  }
  /* 删除数据-------------- */
  removeItem(id) {
    let datalist = this.state.datalist.filter(item => item.id != id)
    this.setState({
      datalist
    })
  }
  /* 改  是否完成 */
  compeletedItem(id) {
    let datalist = this.state.datalist.map(item => {
      if (item.id === id) {
        item.done = true
      }
      return item;
    })
    this.setState({
      datalist
    })
  }
  /* 选择每一项*/
  selectedItem(id) {
    let datalist = this.state.datalist.map(item => {
      if (item.id === id) {
        item.selected = !item.selected
      }
      return item;
    })
    this.setState({
      datalist,
      /* every  一假必假 */
      // checkedAll:this.state.datalist.length?datalist.every(item=>item.selected):false
      checkedAll:datalist.every(item=>item.selected)
    })
  }

  /* 勾选每一项 全选按钮*/
  selectedAll() {

  let checkedAll=!this.state.checkedAll;
  let datalsit=this.state.datalist.map(item=>{
    item.selected=checkedAll;
    return item;
  })

    this.setState({
      checkedAll,
      datalsit
    })
    
  }



  render() {
    // console.log("this-------------=>",this)
    /*render中的this 指向实例 */
    return (
      <div>
        <TodoForm addItem = {this.addItem}></TodoForm>
        <TodoContent
        datalist = {this.state.datalist}
        removeItem = {this.removeItem}
        compeletedItem = {this.compeletedItem  }
        selectedItem = {this.selectedItem }
        checkedAll = {this.state.checkedAll }
        selectedAll = { this.selectedAll }
        ></TodoContent>
      </div>


     

    )
  }
}

/* 往模块对象中添加TodoList属性 */
// export function TodoList(){     return (         <div>
//             TodoList         </div>     ) }

/* 往模块对象中添加default属性 */
export default TodoList;