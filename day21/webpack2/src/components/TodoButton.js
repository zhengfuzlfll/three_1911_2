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
    <button onClick={props.onClick}>{props.children}</button>
  )
}
export default TodoButton;