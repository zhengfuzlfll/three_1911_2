import React, { Component } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Reg from './pages/Reg';

class APP extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <React.Fragment>
                <h1>6666666666</h1>
                <Home></Home>
                <Login></Login>
                <Reg></Reg>
            </React.Fragment>
        )
    
    }
}

export default APP;