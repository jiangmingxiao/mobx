import React, {Component} from 'react';
import { render } from 'react-dom';
import {observable, action, computed,useStrict} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import TodoView from './todoView.jsx';
import TodoListStore from './todoListStore.jsx';

class TodoList extends Component {
    render() {
        return(
            <div>
                <input onChange={this.getValue.bind(this)}></input>
                <button onClick={this.addFn.bind(this)}>添加</button>
                <TodoView data={TodoListStore} delFn={this.delFn.bind(this)}/>
            </div>
        )
    }
    getValue(e){
        this.value=e.target.value;
    }
    addFn(){
        var item=this.value;
        TodoListStore.addList(item);
    }
    delFn(item){
        TodoListStore.delList(item);
    }
}

render(<TodoList />, document.getElementById("app"));
TodoListStore.addList("1")
console.dir(Array.isArray(TodoListStore.list.splice()));
