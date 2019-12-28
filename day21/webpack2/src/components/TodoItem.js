import React, { Component } from 'react';
import MyContext from '../context.js';

import Button from './TodoButton.js';

function TodoItem(props) {
  /* 函数组件/类组件获取context */
 return <MyContext.Consumer>
      {
        (value)=>{
          // console.log('value=>',value);
          let {removeItem,compeletedItem,selectedItem} = value;

        
          return (
            <tr>
              <td><input type="checkbox" checked={props.data.selected} onChange={selectedItem.bind(null,props.data.id)}></input></td>
              <td>{props.index+1}</td>
              <td>{props.data.title}</td>
              <td>{props.data.done?'是':'否'}</td>
              <td>
                {/* <button onClick={compeletedItem.bind(null,props.data.id)}>完成</button>
                <button onClick={removeItem.bind(null,props.data.id)}>删除</button> */}
              <Button onClick={compeletedItem.bind(null,props.data.id)}>完成</Button>
              <Button onClick={removeItem.bind(null,props.data.id)}>删除</Button>
              </td>
            </tr>
          )
        }
      }
  </MyContext.Consumer>
 
}

/* 类组件=> 获取context */
// class TodoItem extends Component{
//   render(){
//     console.log('this.context',this.context)
//     return (
//       <tr>
//         {/* TodoItem */}
//         {/* {props.data.title} - {props.data.done?'是':'否'} */}
//         {/* 复选框 */}
//         <td><input type="checkbox" checked={this.props.data.selected} onChange={this.context.selectedItem.bind(null,this.props.data.id)}></input></td>
//         <td>{this.props.index+1}</td>
//         <td>{this.props.data.title}</td>
//         <td>{this.props.data.done?'是':'否'}</td>
//         <td>
//           <button onClick={this.context.compeletedItem.bind(null,this.props.data.id)}>完成</button>
//           <button onClick={this.context.removeItem.bind(null,this.props.data.id)}>删除</button>
//         </td>
//       </tr>
//     )
//   }
// }
// TodoItem.contextType=MyContext;


export default TodoItem;