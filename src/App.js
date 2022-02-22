import React, { Component } from 'react';

import TodoItems from './components/TodoItems/TodoItems';

import Additem from './components/Additem/additem'


class App extends Component {
  state ={
    items : [
      {id:1, name:'eman' , age: 23},
      {id:2, name:'mohamed' , age: 30},
      {id:3, name:'awad' , age: 22},
    ]
  }

  deleteItem = (id)=> {
      let items =this.state.items;
      let i = items.findIndex(item => item.id == id);
      items.splice(i,1);
      this.setState({items})
  }

  addItem = (item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return(
      <div className="App container">
          <h1 className="text-center">TodoList App </h1>
        <TodoItems items={this.state.items} deleteItem ={this.deleteItem} />  
        <Additem addItem={this.addItem}/>
        </div>
    );
  }
}

export default App;
