import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Link,NavLink, Switch, Redirect} from 'react-router-dom';
/* NavLink 与Link的区别：NavLink自带高亮效果 */
/* 引入组件 */
import Home from '../pages/home.js';
import Login from '../pages/Login.js';
import Reg from '../pages/Reg.js';


class APP extends Component{
    constructor(props){
        super(props);
        this.state={
            menu:[
                {
                name:'home',
                path:'./home',
                text:'首页'
            },
                {
                name:'login',
                path:'./login',
                text:'登录'
            },
                {
                name:'reg',
                path:'./reg',
                text:'注册'
            },
        ]
        }
    }
    render(){
        return <div>
             {/* <HashRouter>*/}
             {/* 任何跳转都需要放在router中 ==>放在根 index.js中最好 */}
            <ul>
                {
                    this.state.menu.map(item=>{
                        /* 声明式导航，Link */
                        /* 属性 activeStyle   被点中的自带高亮效果*/
                        return <li key={item.name}><NavLink to={item.path} activeStyle={{color:'#f00'}}>{item.text}</NavLink></li>
                    })
                }
            </ul>
            {/* <h1>React-Router-Dom 4  路由配置</h1> */}
            {/* 路由模式 */}
           {/* HasRouter=>表示使用哈希路由 */}
            {/* 路由配置，当浏览器路径匹配path时 渲染component组件  =>手动输入路径进行跳转*/ }
            <Switch>
              
                {/* exact 精确匹配 ,Switch只匹配一个，就不会往后面匹配*/}
                
                <Route path='/home' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/reg' component={Reg}></Route>
                <Route path='/notfound' render={()=><h1>你访问的页面不存在！</h1> }></Route>
                {/* 重定向 '/'=>'/home'*/}
                <Redirect from='/' to='/home' exact></Redirect>
                {/* 404   写在最后*/}
                <Redirect to='/notfound'></Redirect>

                {/* Switch后此组件放最后，去掉exact*/}
                {/* <Route path='/' component={Home}></Route> */}
            </Switch>
            {/* </HashRouter> */}
        </div>
    }
}
export default APP;