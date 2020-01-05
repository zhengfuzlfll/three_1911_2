import React, { Component } from 'react';

class List extends Component{
    componentDidMount(){
         console.log('list',this.props);
    }
    render(){
       
        
       return (
        <div>
            List
        </div>
       )
    }
}
export default List;