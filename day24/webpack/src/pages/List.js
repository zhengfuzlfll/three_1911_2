import React, { Component } from 'react';

/* 发送请求 */
import Api from '@/api';

/* antd */
import { Tabs,Col,Row } from 'antd';

/* goodslist */
// import Goodslist from '~/GoodList.js'
import Goodslist from '../components/GoodsList.js'

class List extends Component{
    /* 初始化数据 */
    state={
        menu:[],
        activeKey:'',
        datalist:[]
    }

    /* 方法 */
    changeType =async (gc_id)=>{
        // this.props.history.replace('/discover/'+idx);
        let {datas} = await Api.get({
            act:'goods',
            op:'goods_list',
            gc_id,
            page:20
        });
        // console.log('changeType',datas);

        this.setState({
            datalist:datas.goods_list,
            activeKey:gc_id
        })
    }

    goto=()=>{

    }

   async componentDidMount(){
        //  console.log('list',this.props.match.params.gc_id);
        let {gc_id}=this.props.match.params;
        console.log('gc_id',gc_id);
        let {datas}=await Api.get({
            act: 'goods_class',
            op: 'get_child_all',
            gc_id
        })
        console.log('List_datas',datas);
        /* 根据数据，获取到对应的列表 */
        let menu = datas.class_list[0].child;

        /* 获取第一个tab的数据 */
        let categoryId=menu[0].gc_id;
        // /* 未点击时自动获取到第一个数据 */
        this.changeType(categoryId);


        this.setState({
            menu,
            // activeKey,
            // datalist
        })
    }

    /* 渲染 */
    render(){
        let {menu,activeKey,datalist}=this.state
        // console.log('activeKey',activeKey);
        console.log('datalist',datalist);
        
        
       return (
        <div> 
            <Tabs 
            defaultActiveKey={activeKey} 
            tabPosition='left'
            onChange={this.changeType}
            // style={{minHeight:'630px'}}
            >
                {menu.map((item,idx) => (
                    <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                        
                         {/* 当前tab的数据 */}
                        <Goodslist datalist={datalist} {...this.props}/>

                        {/* <Row gutter={30}>
                            {
                                datalist.map(goods=>{
                                    return <Col
                                    key={goods.goods_id} 
                                    style={{minHeight:280}}
                                    xs={12}
                                    sm={6}
                                    md={4} 
                                    onClick={this.goto.bind(this,goods.goods_id)} 
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
                        </Row>  */}

                    </Tabs.TabPane>
                ))}
            </Tabs>  
            {/* list */}
        </div>
       )
    }
}
export default List;