import React, {
    Component
} from 'react';

import {withStorage} from '../utils/hoc.js';


class Reg extends Component{
    render(){
        return <div>
            Reg
    
        </div>
    }
}
/* 高阶组件 */
Reg=withStorage(Reg)

export default Reg;