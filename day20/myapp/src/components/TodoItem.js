import React from 'react';

function TodoItem(props) {
  return (
    <tr>
      {/* TodoItem */}
      {/* {props.data.title} - {props.data.done?'是':'否'} */}
      {/* 复选框 */}
      <td><input type="checkbox"></input></td>
      <td>{props.index+1}</td>
      <td>{props.data.title}</td>
      <td>{props.data.done?'是':'否'}</td>
      <td>
        <button>完成</button>
        <button>删除</button>
      </td>
    </tr>
  )
}

export default TodoItem;