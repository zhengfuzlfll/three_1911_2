import React, { Component } from 'react';



// function TodoForm({addItem}){
//     return (
//         <div>
//           {/* TodoForm */}
//           <input type="text"></input>
//           <button onClick={addItem}>添加</button>
//         </div>
//     )
// }

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
    /* 修正this的指向    */
    this.changeTitle = this.changeTitle.bind(this)
    this.additem = this.additem.bind(this)
    this.handleEnterKey = this.handleEnterKey.bind(this)
  }

  /*  */
  changeTitle(event) {
    // console.log('todoform-event => ',event)
    // console.log(event.target.value)
    /* 覆盖 */
    this.setState({
      // title:''
      /* 获取到当前改变的数据   event对象*/
      title: event.target.value
    })
  }

  /* 清空并获得焦点 ---------*/
  additem() {
    /* 将数据传到 父组件*/
    this.props.addItem(this.state.title);
    /*清空 */
    this.setState({
      title: ''
    })
    /* 获得焦点 =>节点操作 */
    /* 字符串写法 */
    // this.refs.title.focus();
    /* 回调写法=>推荐 */
    this.title.focus();
  }

  // handleEnterKey((e)=>{
  //   if(e.nativeEvent.keyCode===13){
  //     this.additem()
  //   }
  // })

  /* 回车插入数据 */
  handleEnterKey = function (e) {
    if (e.nativeEvent.keyCode === 13) { //e.nativeEvent获取原生的事件对像
      // console.log(66666);
      
      this.additem()
    }
    // console.log(e); 
  }

  // componentDidUpdate(){
	// 	document.addEventListener('keyup',this.onkeyup);
	// }




  /* 类组件中获取props :this.props */
  render() {
    let { addItem } = this.props
    return (
      <div onKeyUp={this.handleEnterKey}>
        {/* TodoForm */}
        {/* 给input 的value 添加数据，必须提供改变这个数据的方法*/}
        {/* <input type="text" value={this.state.title} onChange={this.changeTitle}></input> */}

        {/* 字符串写法=>节点操作，获得焦点 */}
        {/* <input type="text" ref='title'  value={this.state.title} onChange={this.changeTitle}></input> */}
        {/* 回调写法==>>推荐          回车*/}
        <input type="text" ref={(ele) => this.title = ele} value={this.state.title} onChange={this.changeTitle}></input>
        {/* <input type="text"  ref={(ele) => this.title = ele} value={this.state.title} onChange={this.changeTitle}></input> */}
        {/* <button onClick={addItem}>添加</button> */}
        {/* 传参----------- */}
        {/* <button onClick={addItem.bind(this,this.state.title)}>添加</button> */}
        <button onClick={this.additem}>添加</button>

      </div>


    )
  }
}



/* 导出 */
export default TodoForm;
