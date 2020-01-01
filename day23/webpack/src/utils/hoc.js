import React from 'react';/* 由于使用了jsx 需引入react */
/* 高阶组件封装   公用的数据 ,如 获取localStorage本地存储，多个组件需要使用到
    使用时：在需要用到的组件里引入hoc.js,如home.js中，引入hoc.js=>
     import {withStorage} from '../utils/hoc.js', 在home.js导出
    的位置，Home=withStorage(Home),即可通过this.props获取传过去的数据
*/
export function withStorage(InnerComponent) {
    /* 返回一个组件 */
    let user=localStorage.getItem('user');
    // if(user){
    //     user=JSON.parse(user);
    
    // }
    return function OuterComponent(){
        return <InnerComponent user={user}></InnerComponent>
    }
}