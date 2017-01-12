import React,{Component} from 'react';
import "../less/test.less";
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';



// 观察者
@observer
class TodoView extends Component  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {this.props.data.list.map((item,index) => <li onClick={this.props.delFn.bind(this,item)} key={index}>{item}</li>)}
                <DevTools/>
            </ul>
        )
    }
}
export default TodoView;

