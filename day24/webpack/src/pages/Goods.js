import React, {
    Component
} from 'react';

class Goods extends Component{
    render(){
        console.log('Goods',this.props)
        return <div>
            Goods
        </div>
    }
}
export default Goods;