import React, {
    Component
} from 'react';

import {withStorage} from '../utils/hoc.js';

// console.dir(withStorage)
class Home extends Component{
    render(){
    console.log('Home',this.props)
        return <div>
            Home
        </div>
    }
}

Home=withStorage(Home);
export default Home;