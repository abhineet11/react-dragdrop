import React, {Component} from 'react';
import './App.css';
import Item from './container/Item';
import Target from './container/Target';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

class App extends Component {
  state = {
    items: [
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'Item 2'},
      {id: 3, name: 'Item 3'},
      {id: 4, name: 'Item 4'},
    ],
  };
  deleteItem = (id) => {
    console.log('deleting:'+ id)
    this.setState(prevState => {
      let items = prevState.items;

      const index = items.findIndex(item => item.id ===id)
      items.splice(index, 1);
      return { items }
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.items.map((item, index) => {
            return <Item item={item} key={item.id} classes="item" handleDrop={this.deleteItem}/>;
          })}
        </div>
        <Target classes="target"/>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(App)

