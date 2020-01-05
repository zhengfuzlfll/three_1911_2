import React, {
    Component
} from 'react';

/* 别名  webpack 配置 */
import Api from '@/api/index.js';
console.log('Api',Api)
/* 引入antd */
import { Icon,Button,Row,Col } from 'antd';
/* 样式 */
import '../style/Goods.scss';
/* 推荐列表 */
// import Goodslist from '~/GoodsList'

let Styles = {
    mt:{
        marginTop:20
    },
    pd:{
        padding:15
    }
}


class Goods extends Component{
    /* 数据 初始值*/
    state = {
        data:{},
        commedList:[]
    }
   
  

    /* 方法 */
    /* 点击跳转 */
    /* 给实例添加方法 */
    goto=(id)=>{
        this.props.history.push(`/goods/${id}`)
    }

    /* 封装一个方法 发送请求跳转详情页*/
    getData=async ()=>{
        let {id}=this.props.match.params;
        console.log('Goods-id：',id);
        /* https://www.nanshig.com/mobile/index.php?act=goods&op=goods_detail&goods_id=227345&key= */
        /* 发送请求 */
        let data=await Api.get({
            act:'goods',
            op:'goods_detail',
            goods_id:id
        })
        // console.log('data',data)

        let {goods_image,goods_info,goods_commend_list}=data.datas;
        this.setState({
            data:{
                ...goods_info,
                goods_image
            },
            commedList:goods_commend_list
        })
    }

    /* 请求 */ /* 获取到id值 */
    /* 给原型添加方法 */
   componentDidMount(){
        // console.log(this.props.match.params)
        // let {id}=this.props.match.params;
        // console.log('Goods-id：',id);
        // /* https://www.nanshig.com/mobile/index.php?act=goods&op=goods_detail&goods_id=227345&key= */
        // /* 发送请求 */
        // let data=await Api.get({
        //     act:'goods',
        //     op:'goods_detail',
        //     goods_id:id
        // })
        // console.log('data',data)

        // let {goods_image,goods_info,goods_commend_list}=data.datas;
        // this.setState({
        //     data:{
        //         ...goods_info,
        //         goods_image
        //     },
        //     commedList:goods_commend_list
        // })

        // console.log('this.state',this.state)
        this.getData()
    }

    /* 点击详情页内的推荐列表切换详情页 */
    componentDidUpdate(prevProps,prevState){/* 慎重使用-修改state的数据 */
        // this.getData()
        // console.log(666);
        // console.log('prevProps',prevProps)
        /* 添加判断条件，防止进入死循环 */
        /* prevProps 前一次的history   this.props.match当前的history*/
        if(prevProps.match.params.id!=this.props.match.params.id){
            this.getData()
            
        }
        

    }



    /* 渲染 */
    render(){
        // console.log('Goods',this.props)
        let {data,commedList}=this.state
        console.log('commedList',commedList)
        return <div>
            {/* Goods */}

            {/* >>>>>>>>>大图+标题 */}
            <div className="img-container">
                <img src={data.goods_image} />
                {/* 收藏 */}
                <Icon type="heart" style={{ fontSize: 30, color: '#f00' }} />

                <Icon
                    className="btnBack"
                    /* 返回上一级 */
                    type="arrow-left"
                    style={{ fontSize: 30, color: '#f00' }}
                    /* 点击返回上一级 */
                    onClick={()=>{
                        this.props.history.goBack();
                    }}
                   />
            </div>
            <div style={Styles.pd}>
                <h1>{data.goods_name}</h1>
                <p className="price">
                    <del>{data.goods_price}</del>
                    <span>{(data.goods_promotion_price * 0.8).toFixed(2)}</span>
                </p>

                {/* 添加购物车 */}
                <Button.Group>
                    <Button icon="shopping-cart" size="large">添加到购物车</Button>
                    <Button icon="shopping" type="danger" size="large">立即购买</Button>
                </Button.Group>
            </div>

            
            {/* >>>>>>>>>>>>>>>>推荐列表 */}
            <div style={Styles.pd} >
                <h4 style={Styles.mt}>推荐列表</h4>
                <Row gutter={30}>
                {
                    commedList.map(goods=>{
                        return <Col
                        key={goods.goods_id} 
                        style={{minHeight:280}}
                        xs={12}
                        sm={6}
                        md={4}

                        /* 点击推荐列表跳转 */
                        onClick={this.goto.bind(this,goods.goods_id)}
                    //    onClick={this.goto.bind(this,goods.goods_id)}
                        >
                            <img src={goods.goods_image_url} style={{width:'100%'}}/>
                            <h5>{goods.goods_name}</h5>
                            <p className="price">
                                <del>{goods.goods_promotion_price}</del>
                                <span>{(goods.goods_promotion_price*0.8).toFixed(2)}</span>
                            </p>
                        </Col>
                    })
                }
            </Row>
            {/* <Goodslist datalist={commedList} title="推荐列表"/> */}
            </div>
        </div>
    }
}
export default Goods;