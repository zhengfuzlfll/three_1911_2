import React from 'react';
import TodoItem from './TodoItem.js';

/* 类型校验   npm i prop-types -D*/
import PropTypes from 'prop-types';

function TodoContent(props) {
  // console.log(props)
//   return (
//     <table>
//       {/* TodoContent */}
//       {/* map返回值为数组，必须有返回值 */
//       props  .datalist .map((item, index) => {
//           return <TodoItem data={item}></TodoItem>
//         })
// }
//       {/* <TodoItem></TodoItem> */}
//     </table>
    return (
        <React.Fragment>
        <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" checked={props.checkedAll} onChange={props.selectedAll}></input>
                    全选
                </th>
                <th>#</th>
                <th>代办事项</th>
                <th>是否完成</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
          {
              props.datalist.map((item,index)=>{
                  return <TodoItem 
                    data={item} 
                    index={index} 
                    key={item.id}
                    removeItem={props.removeItem}
                    compeletedItem={props.compeletedItem}
                    selectedItem={props.selectedItem}

                  ></TodoItem>
              })
          }
        </tbody>
    </table>

<div>总数：{props.datalist.length}  完成：{props.datalist.filter(item=>item.done).length}  未完成：{props.datalist.filter(item=>!item.done).length} </div>
        </React.Fragment>
      )
}
  
    /* datalist传入的类型校验 */
  TodoContent.propTypes={
    datalist:PropTypes.array.isRequired//必填，限定他人的使用
  }
  
/* 设置默认值 ====>可不填isRequired*/
TodoContent.defaultProps={
  datalist:[]
}

/* 类组件的静态属性，默认有静态方法   =>TodoList    static* /


/* 导出 */
export default TodoContent;
