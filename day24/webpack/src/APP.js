import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Link,NavLink, Switch, Redirect,withRouter} from 'react-router-dom';
/* NavLink 与Link的区别：NavLink自带高亮效果
  withRouter高阶组件 
  Redirect  重定向
*/

/* antd --------------------*/
import { DatePicker } from 'antd';
// 引入样式 =>配置加载器loader  编译css
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

/* memu */
import { Menu, Icon,Row, Col,Button  } from 'antd';
// import { Row, Col } from 'antd';

/* 引入组件 */
import Home from './pages/home.js';
import Login from './pages/Login.js';
import Reg from './pages/Reg.js';
import Cart from './pages/Cart.js';
import Discover from './pages/Discover.js';
import Goods from './pages/Goods.js';


/* 样式》》》》》》》》》》》 */
import './APP.scss';

class APP extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedKeys:['/home'],
            menu:[
            {
                name:'home',
                path:'/home',
                text:'首页',
                icon:'home'
            },
            {
                name:'discover',
                path:'/discover',
                text:'发现',
                icon:'compass'
            },
            {
                name:'cart',
                path:'/cart',
                text:'购物车',
                icon:'shopping-cart'
            },
            // {
            //     name:'goods',
            //     path:'/goods',
            //     text:'商品',
            //     icon:'shopping'
            // },


            // {
            //     name:'login',
            //     path:'/login',
            //     text:'登录',
            //     icon:'login'
            // },
            //     {
            //     name:'reg',
            //     path:'/reg',
            //     text:'注册',
            //     icon:'user-add'
            // },
        ]
        },
        
        this.changeMenu=this.changeMenu.bind(this);
        this.goto=this.goto.bind(this);
    }

    /* 路由导航切换------------- */
    changeMenu(current){
        // console.log(current)
        let {key}=current
        /* 编程式导航 =>获取history 对象*/
        /* 利用<Route />  组件渲染    =>index.js    */
        /* 接收=>  this.props.history */
        this.props.history.push(key);
        this.setState({
            selectedKeys:[key]
        })
    }

    /* 在刷新时高亮保持不变 */
    componentDidMount(){
        /* 在刷新时高亮保持不变 */
        this.setState({
            selectedKeys:[this.props.location.pathname]
        })
    }

    /* 登录注册跳转 */
    goto(path){
        this.props.history.push(path)
    }

    render(){
        let {menu,selectedKeys} =this.state
        console.log('APP',this.props)
        return <div>
             {/* <HashRouter>*/}
             {/* 任何跳转都需要放在router中 ==>放在根 index.js中最好 */}
               {/*  声明式导航，Link 
                        属性 activeStyle   被点中的自带高亮效果*/}
            {/* <ul>
                {
                    this.state.menu.map(item=>{ 
                        return <li key={item.name}><NavLink to={item.path} activeStyle={{color:'#f00'}}>{item.text}</NavLink></li>
                    })
                }
            </ul> */}
            <Row style={{backgroundColor:'#001529'}}>
                {/* 列 */}
                <Col span={18} >
                <Menu 
                    mode="horizontal" 
                    onSelect={this.changeMenu} 
                    /*defaultSelectedKeys仅在初始值时生效  */
                    //   defaultSelectedKeys={selectedKeys}
                    selectedKeys={selectedKeys}
                    /* 主题 */
                    theme="dark"
                    >
                        
                            {
                            menu.map(item=>{
                                    // return <Menu.Item key={item.name}>
                                    return <Menu.Item key={item.path}>
                                        {/* 声明式导航  NavLink   影响antd的样式 */}
                                        {/* <NavLink to={item.path} activeStyle={{color:'#f00'}}> */}
                                            <Icon type={item.icon} />
                                            {item.text}
                                        {/* </NavLink> */}
                                    </Menu.Item>
                                })
                            }
                    </Menu>
                </Col>
                
                {/* --登录注册------------ */}
                <Col span={6} style={{lineHeight:'46px',textAlign:'right'}} className="nav-link">
                    <Button 
                    type="link"
                    icon='login' 
                    onClick={this.goto.bind(this,'/login')}
                    >登录</Button>
                    
                    <Button 
                    type="link" 
                    icon='user-add'
                    onClick={this.goto.bind(this,'/reg')}
                    >注册</Button>
                </Col>
            </Row>
           
               
    
            {/* <h1>React-Router-Dom 4  路由配置</h1> */}
            {/* 路由模式 */}
           {/* HasRouter=>表示使用哈希路由 */}
            {/* 路由配置，当浏览器路径匹配path时 渲染component组件  =>手动输入路径进行跳转*/ }
            <Switch>
              
                {/* exact 精确匹配 ,Switch只匹配一个，就不会往后面匹配*/}
                
                <Route path='/home' component={Home}></Route>
                <Route path='/discover' component={Discover}></Route>
                <Route path='/cart' component={Cart}></Route>
                {/* 动态路由      -------       */}
                <Route path='/goods/:id' component={Goods}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/reg' component={Reg}></Route>
                <Route path='/notfound' render={()=><h1>你访问的页面不存在！</h1> }></Route>
                {/* 重定向 '/'=>'/home'=>精确匹配*/}
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

/* 高阶组件，获取到history  写法1*/
APP=withRouter(APP)
export default APP;