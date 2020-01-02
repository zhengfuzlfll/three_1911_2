import React, {
    Component
} from 'react';

import {withStorage} from '../utils/hoc.js';

/*高阶组件 （装饰器模式）写法2  */
/* 浏览器不支持=>插件 npm i -D @babel/plugin-proposal-decorators 配置webpack */

@withStorage
// console.dir(withStorage)
class Home extends Component{
    render(){
    console.log('Home',this.props)
        return <div>
            Home
        </div>
    }
}
/* 高阶组件  写法1 */
// Home=withStorage(Home);
export default Home;