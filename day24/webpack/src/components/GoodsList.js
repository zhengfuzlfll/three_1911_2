import React from 'react';
/* antd */
import {Col,Row} from 'antd';


const  GoodsList=(datalist,history)=>{
    // const goto = (id)=>{
    //     history.pushState(`/goods/${id}`)
    // }
    console.log('goodlist',datalist);
    
    return (
        // <div style={Styles.pd} >
        //         <h4 style={Styles.mt}>推荐列表</h4>
                <Row gutter={30}>
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
                </Row>
            // </div>
    )
}

export default GoodsList;