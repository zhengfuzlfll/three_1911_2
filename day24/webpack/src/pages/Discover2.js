import React, {
    Component
} from 'react';

class Discover extends Component{
    render(){
        let {match}=this.props
        return <div>
            {/* Discover */}
            {/* 嵌套路由 */}
            <Switch>
                {/* 若父组件即discover更改名字，则嵌套的路由不匹配 */}
                {/* <Route path='discover/phone' component={Phone}></Route>
                <Route path='discover/computer' component={Computer}></Route>
                <Route path='discover/access' component={Access}></Route> */}

                {/* 解决嵌套路由不匹配 ,用path（不用url）表示原封不动使用父级路由，防止父级有动态路由出现其他问题*/}
                <Route path={this.props.match.path+'/phone'} component={Phone}></Route>
                {/* 解构 */}
                <Route path={match.path+'/computer'} component={Computer}></Route>
                <Route path={match.path+'/access'} component={Access}></Route>
            </Switch>
        </div>
    }
}
export default Discover;