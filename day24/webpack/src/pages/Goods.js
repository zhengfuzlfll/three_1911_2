import React, {
    Component
} from 'react';

class Goods extends Component{
    componentDidMount(){
        // console.log(this.props.match.params)
        let {id}=this.props.match.params;
        console.log('Goods-id：',id)
    }


    render(){
        console.log('Goods',this.props)
        return <div>
            Goods
        </div>
    }
}
export default Goods;