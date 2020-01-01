import React from 'react';
import {
    render
} from 'react-dom';

import APP from './APP'
import { HashRouter,Route } from 'react-router-dom';

render(
    <HashRouter>
        <APP></APP>
        {/*1、 编程式导航之组件渲染方式 */}
        {/* <Route component={APP}></Route> */}
    </HashRouter>,
    document.querySelector("#app")
)