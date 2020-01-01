import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';

/* 引入组件 */
import Home from '../pages/home.js';
import Login from '../pages/Login.js';
import Reg from '../pages/Reg.js';


class APP extends Component{
    render(){
        return <div>
            {/* <h1>React-Router-Dom 4  路由配置</h1> */}
            {/* 路由模式 */}
            <HashRouter>{/* HasRouter=>表示使用哈希路由 */}
            {/* 路由配置，当浏览器路径为 path时 渲染component组件*/}
                <Route path='/home' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/reg' component={Reg}></Route>
            </HashRouter>
        </div>
    }
}
export default APP;