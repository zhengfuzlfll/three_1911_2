import React from 'react';
import {
    render
} from 'react-dom';

import APP from './APP'
import { HashRouter,Route } from 'react-router-dom';

render(
    <HashRouter>
        {/* 可在<APP></APP>中写内容 */}
        <APP></APP> {/*props中无history  {}  =>2、通过高阶组件解决 */}
       
        {/*1、 编程式导航之组件渲染方式 */}
        {/* <Route component={APP}></Route> */}
    </HashRouter>,
    document.querySelector("#app")
)