import React, {
    Component
} from 'react';
import {Route} from 'react-router-dom';
/* 引入文件 */
import List from './List';

/* antd */
import { Tabs } from 'antd';

/* 请求 */
import Api from '@/api/index.js';


class Discover extends Component{
   /* 初始化数据 */
    state={
        /* 高亮索引值 */
        currentInx:0,
        activeKey:'',
        menu:[]
    }

    /* 方法 */
    changeType = (idx)=>{
        this.props.history.replace('/discover/'+idx);
    }


    /*  */
   async componentDidMount(){
        let {currentInx}=this.state;
        let {datas}=await Api.get({
            act:'goods_class'
        })
        console.log('datas',datas);
        /* 高亮对应的id值*/
        let activeKey=datas.class_list[currentInx].gc_id
        /* 数据 */
        this.setState({
            menu:datas.class_list,
            activeKey

        });

        // 请求第一个tab对应的数据
        this.changeType(activeKey);
    }


    /*渲染 */
    render(){
        let {match}=this.props
        let {menu,activeKey}=this.state;
        return <div>
            {/* Discover */}
            {/* 嵌套路由 */}
            {/* <Switch> */}
                {/* 若父组件即discover更改名字，则嵌套的路由不匹配 */}
                {/* <Route path='discover/phone' component={Phone}></Route>
                <Route path='discover/computer' component={Computer}></Route>
                <Route path='discover/access' component={Access}></Route> */}

                {/* 解决嵌套路由不匹配 ,用path（不用url）表示原封不动使用父级路由，防止父级有动态路由出现其他问题*/}
                {/* <Route path={this.props.match.path+'/phone'} component={Phone}></Route> */}
                {/* 解构 */}
                {/* <Route path={match.path+'/computer'} component={Computer}></Route>
                <Route path={match.path+'/access'} component={Access}></Route>
            </Switch> */}
          
            {/* <Tabs 
                // 高亮
                defaultActiveKey={activeKey} 
                tabPosition='top'
                onClick={this.changeType}
                >
                    {menu.map((item,idx) => (
                        <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                            
                            <Route path={match.path+"/:gc_id"}  component={List} />
                        </Tabs.TabPane>
                    ))}
            </Tabs> */}

            <Tabs 
                defaultActiveKey={activeKey} 
                tabPosition='top'
                onChange={this.changeType}
                >
                    {menu.map((item,idx) => (
                        <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                            {/* 动态路由，嵌套路由 */}
                            <Route path={match.path+"/:gc_id"} component={List} />
                        </Tabs.TabPane>
                    ))}
            </Tabs>

        </div>
    }
}
export default Discover;