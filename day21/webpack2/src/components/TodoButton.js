import React from 'react';

// const TodoButton = (props) => ( <button>{props.children}</button> )
const TodoButton = (props) => {
  //   console.log('props.children', props);   console.log(React.Children);
  React
    .Children
    .map((item) => {
      console.log(666)
    })

  return (
      /* 任何数据都在props中 */
    <button onClick={props.onClick}>{props.children}</button>
  )
}
export default TodoButton;