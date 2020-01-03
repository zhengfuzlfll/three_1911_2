import React, {
    Component
} from 'react';

import {withStorage} from '../utils/hoc.js';

/* ajax   npm i -D axios */
// import axios from 'axios';

/* 封装好的axios     */
import Api  from '../api/index.js';

import { Carousel } from 'antd';



/*高阶组件 （装饰器模式）写法2  */
/* 浏览器不支持=>插件 npm i -D @babel/plugin-proposal-decorators 配置webpack */
@withStorage
// console.dir(withStorage)
class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            recomend:[]
        }
     
    }
   async componentDidMount(){
        /* Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。 */
        /* axios.get('https://www.nanshig.com/mobile/index.php?act=index')  得到promise对象 */
        // axios.get('https://www.nanshig.com/mobile/index.php?act=index').then(res=>{
        //     console.log(' res  data',res)
        // })
        let data=await Api.get({
            act:'index'
        })
        console.log('data',data)

        let recomend=data.datas[0].adv_list.item;
        this.setState({
            recomend
        })
        
    }




    render(){
    console.log('Home',this.props)
    let {recomend} = this.state
    /* style={{background:'red',textAlign:'center'}} */

        return <div>
            <Carousel  autoplay>
            {/* autoplay */}
                {/* <div>
                <h3>1</h3>
                </div>
                <div> 
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div> */}

                {
                  recomend.map(item=>{
                      return <img key={item.image} src={item.image}></img>
                  })  
                }
                {
                  recomend.map(item=>{
                      return <img key={item.image} src={item.image}></img>
                  })  
                } 
                {
                    recomend.map(item=>{
                        return <img key={item.image} src={item.image}></img>
                    })  
                  }
            </Carousel>
        </div>
    }
}
/* 高阶组件  写法1 */
// Home=withStorage(Home);
export default Home;