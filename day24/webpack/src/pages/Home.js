import React, {
    Component
} from 'react';

import {withStorage} from '../utils/hoc.js';

/* ajax   npm i -D axios */
// import axios from 'axios';

/* 封装好的axios     */
import Api  from '../api/index.js';

import { Carousel,Icon,Row,Col} from 'antd';



/*高阶组件 （装饰器模式）写法2  */
/* 浏览器不支持=>插件 npm i -D @babel/plugin-proposal-decorators 配置webpack */
@withStorage
// console.dir(withStorage)
class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            recomend:[],
            datalist:[]
        }

        // this.goto=this.goto.bind(this)
     
    }
    // goto(id){

    // }
    /*使用箭头函数，可不用修正this指向，因为箭头函数中 无this*/
    goto=()=>{

    }




    /* 用于发送ajax请求 */
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
        /* 首页轮播图 */
        let recomend=data.datas[0].adv_list.item;

        /* 首页数据 */
        let datalist=data.datas.slice(1).map(item=>item.goods)

        this.setState({
            recomend,
            datalist
        })
        // console.log('datalist',datalist);
    }



    /* 渲染 */
    render(){
    console.log('Home',this.props)
    let {recomend,datalist} = this.state
    
    /* style={{background:'red',textAlign:'center'}} */
        return <div>
            {/*《《《《《《 轮播图 */}
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
                
           {/* 《《《《首页数据 */} 
            <div>
                {datalist.map(item=>{
                    return (
                        <React.Fragment key={item.title}>
                            <h4>{item.title}</h4>
                            <Row gutter={[10,10]} > 
                                {item.item.map(item=>{
                                  return  <Col 
                                            span={12} 
                                            key={item.goods_id}
                                            // xs={12}
                                            // md={8}
                                            // xl={6}

                                            /* 点击跳转详情页 */
                                            onClick={this.goto.bind(this,`/goods/${item.goods_id}`)}
                                            >
                                        <img src={item.goods_image} style={{width:'100%'}}></img>
                                        <h5>{item.goods_name}</h5>
                                        <p className='price'>
                                            {/* 原价 */}
                                            <del>{item.goods_price}</del>
                                            {/* 优惠价 */}
                                            <span>{item.goods_promotion_price}</span>
                                        </p>
                                    </Col>
                                })}
                            </Row>
                        </React.Fragment>
                    )
                })}
                

            </div>
           
        </div>
    }
}
/* 高阶组件  写法1 */
// Home=withStorage(Home);
export default Home;