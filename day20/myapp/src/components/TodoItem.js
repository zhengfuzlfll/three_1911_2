import React from 'react';

function TodoItem(props) {
  return (
    <tr>
      {/* TodoItem */}
      {/* {props.data.title} - {props.data.done?'是':'否'} */}
      {/* 复选框 */}
      <td><input type="checkbox" checked={props.data.selected} onChange={props.selectedItem.bind(null,props.data.id)}></input></td>
      <td>{props.index+1}</td>
      <td>{props.data.title}</td>
      <td>{props.data.done?'是':'否'}</td>
      <td>
        <button onClick={props.compeletedItem.bind(null,props.data.id)}>完成</button>
        <button onClick={props.removeItem.bind(null,props.data.id)}>删除</button>
      </td>
    </tr>
  )
}

export default TodoItem;