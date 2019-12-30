/*生命周期 */
import React, {
    Component
} from 'react';

class Lifecycle extends Component {
    /* 初始化 */
    constructor() {
        super();
        console.log('constructor');
        this.state={
            qty:1
        }
        this.changeQty=this.changeQty.bind(this)
    }

    changeQty(){
        this.setState({
            qty:this.state.qty+1
        })
    }

    

    /* 挂载 */
    // componentWillUpdate(){/* 不推荐 */
    //     console.log('componentWillUpdate');
    // }
    componentDidMount(){
        console.log('componentDidMount');
        /* 发起ajax请求 */
    }

    /* 更新 */
    // componentWillMount(){/* 不推荐 */
    //     console.log('componentWillMount');
        
    // }
    componentDidUpdate(preProps,preState){
        /* 前一次的props   前一次的state */
        console.log('componentDidUpdate',preProps.qty,this.state.qty);
        /* 数据修改后发起ajax请求 */
        /* 监听qty的修改，发起ajax请求获取库存量 */
        //慎重修改state  避免死循环
    }

    /* 销毁 */
    componentWillUnmount() {
        console.log('componentWillUnmount');
        /* 清除定时器，终止ajax请求 */
        /* ===> 定时器与组件毫无关系，组件销毁后定时器还在 */
    }

    /* 特殊生命周期 */
    // componentWillReceiveProps(){/* 不推荐 */
    //     console.log('componentWillReceiveProps');
        
    // }
    /* 用于性能优化 */
    shouldComponentUpdate(nextProps,nextState){
        /* nextProps,nextState 将要修改的props,state*/
        /* nextState.qty=>将要修改的值,this.state.qty =>原来的值*/
        console.log('shouldComponentUpdate',nextState.qty,this.state.qty);
        /* 必须有返回值 */
        /* 性能优化 */
        // if(nextState.qty%5===0){
        //     return  true;
        // }else{
        //     return false;
        // }
        return true;

    }

    render(){
        console.log('render');
        return (
            <>
                <div>生命周期</div>
                <button onClick={this.changeQty}>componentDidUpdate:{this.state.qty}</button>
            </>
        )
    }
}

export default Lifecycle;